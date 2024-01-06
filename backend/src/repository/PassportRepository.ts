import {Injectable} from "@tsed/di";
import { getRepository } from 'typeorm';
import { Passport } from '../entities/PassportEntity';

@Injectable()
export class PassportRepository {
    private passportRepository = getRepository(Passport)

    async findById(id: number) {
        return await this.passportRepository.findOne({ where: { passport_id: id } });
    }

    async findAll() {
        return await this.passportRepository.find();
    }

    async save(passport: Passport) {
        return await this.passportRepository.save(passport);
    }

    async delete(id: number) {
        return await this.passportRepository.delete(id);
    }
}
