import path from 'path';
import fs from 'fs';
import jwt from "jsonwebtoken";
import bycrypt from 'bcrypt';
import { Service } from '@tsed/di';
import { getRepository } from 'typeorm';
import { Unauthorized } from '@tsed/exceptions';
import { User } from '../entities/UserEntity';
import { frontUrl, keyValitor } from '../mixins/constants';
import { SendEmailService } from "../services/SendEmailService";
import { SendSmsService } from "../services/SendSmsService";
import { UserRepository } from "../repository/UserRepository";
import { PersonalDataRepository } from "../repository/PersonalDataRepository";


@Service()
export class ForgetDataService {
    constructor(
        private sendSmsService: SendSmsService,
        private userRepository: UserRepository,
        private personalDataRepository: PersonalDataRepository,
    ) { }
    private temporalCode: { [phone: string]: string } = {};
    private temporalToken: {} = {};

    async forgetData(phone: string) {
        const userRepository = getRepository(User);
        const user = await userRepository.findOne({ where: [{ phone: phone }] });

        const randomCode = Math.floor(Math.random() * 900000) + 100000;
        this.temporalCode[phone] = randomCode.toString();

        if (!user) {
            throw new Unauthorized('No existe usuario con ese teléfono');
        }

        const message = `Su código de verificación de Atletas App es: ${randomCode}`;

        try {
            this.sendSmsService.sendSms(phone, message);
        }
        catch (error) {
            throw new Unauthorized('No se pudo enviar el código de verificación');
        }
    }

    async verifyCode(phone: string, code: string, token: string) {
        try {
            jwt.verify(token, keyValitor);
        }
        catch (error) {
            throw new Unauthorized('Token incorrecto o expirado');
        }

        const storedCode = this.temporalCode[phone];

        if (!storedCode) {
            throw new Unauthorized('No se encontró un código asociado a ese teléfono');
        }

        if (storedCode !== code) {
            throw new Unauthorized('Código incorrecto');
        }

        if (phone !== Object.keys(this.temporalCode)[0]) {
            throw new Unauthorized('El número de teléfono no coincide');
        }

        delete this.temporalCode[phone];
        const user = await this.userRepository.findByPhone(phone);

        if (!user) {
            throw new Unauthorized('Error, no se encontró el usuario');
        }

        const { password, ...userWithoutPassword } = user;

        return userWithoutPassword;
    }

    async recoverPassword(email: string, token: string) {
        const user = await this.userRepository.findByEmail(email);

        if (!user) {
            throw new Unauthorized('El usuario no existe');
        }

        const personalData = await this.personalDataRepository.findById(user.personal_data_id);

        if (!personalData) {
            throw new Unauthorized('No se encontró el usuario');
        }

        const templatePath = path.join(__dirname, '../../src/templates', 'recover-password.html');
        const template = fs.readFileSync(templatePath, 'utf8');

        const confirmationLink = frontUrl + '/cambiar-contraseña/' + token;

        if (user) {
            try {
                const sendEmailService = new SendEmailService();
                await sendEmailService.sendEmail(email, personalData.name, confirmationLink, template);
            }
            catch (error) {
                return error;
            }
        }

        return 'Email de confirmación enviado';
    }

    async confirmRecoverPassword(token: string) {
        try {
            const decode = jwt.verify(token, keyValitor);

            if (typeof decode === 'string') {
                throw new Unauthorized('Token incorrecto o expirado');
            }

            const user = await this.userRepository.findByEmail(decode.email);

            if (!user) {
                throw new Unauthorized('El usuario no existe');
            }

            const { password, ...userWithoutPassword } = user;

            return userWithoutPassword;
        }
        catch (error) {
            throw new Unauthorized('Token incorrecto o expirado');
        }
    }

    async changePassword(password: string, token: string) {
        try {
            const decode = jwt.verify(token, keyValitor);

            if (typeof decode === 'string') {
                throw new Unauthorized('Token incorrecto o expirado');
            }

            const user = await this.userRepository.findByEmail(decode.email);

            user!.password = await bycrypt.hash(password, 10);

            await this.userRepository.update(user!);

            return 'Contraseña cambiada correctamente';
        }
        catch (error) {
            throw new Unauthorized('No hay token o es incorrecto');
        }
    }

    async changePasswordLogged(id: number, password: string) {
        const user = await this.userRepository.findById(id);

        if (!user) {
            throw new Unauthorized('El usuario no existe');
        }

        user.password = await bycrypt.hash(password, 10);

        await this.userRepository.update(user);

        return 'Contraseña cambiada correctamente';
    }
}
