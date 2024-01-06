import { Controller } from '@tsed/di';
import { Get, Post, Put } from '@tsed/schema';
import { BodyParams, UseBefore, Res } from '@tsed/common';
import { PathParams } from '@tsed/platform-params';
import { UsersService } from '../../services/UserService';
import { ForgetDataService } from '../../services/ForgetDataService';
import { AuthMiddleware } from '../../middlewares/AuthMiddleware';
import { keyValitor } from '../../mixins/constants';
import jwt from 'jsonwebtoken';

@Controller('/users')
export class UsersController {
  constructor(
    private usersService: UsersService,
    private forgetDataService: ForgetDataService
  ) {}


  @Get('/')
  @UseBefore(AuthMiddleware)
  async getAll() {
    const users = await this.usersService.getAll();

    return users;
  }

  @Get('/:id')
  @UseBefore(AuthMiddleware)
  async getOne(@PathParams('id') id: number) {
    const user = await this.usersService.getOne(id);

    return user;
  }


  //this endpoint work with "verify-code"
  // for route /olvidoDatos
  @Post('/forget-data')
  async forgetData(
    @BodyParams('phone') phone: string,
    @Res() response: Res,
  ) {
    const token = jwt.sign({ phone }, keyValitor, { expiresIn: '15m' });

    await this.forgetDataService.forgetData(phone);

    return response.status(200).json({
      message: 'Código enviado al número afiliado',
      token: token
    });
  }


  @Post('/verify-code')
  async verifyCode(
    @BodyParams('phone') phone: string,
    @BodyParams('code') code: string,
    @BodyParams('token') token: string,
    @Res() response: Res,
  ) {
    const verifyUser = await this.forgetDataService.verifyCode(phone, code, token);

    return response.status(200).json({
      message: 'Código verificado con éxito',
      userData: verifyUser
    });
  }

  // this endpoint work with "confirm"
  // for route /forgatPassword
  @Post('/recover-password')
  async recoverPassword(
    @BodyParams('email') email: string,
    @Res() response: Res,
  ) {
    const token = jwt.sign({ email }, keyValitor, { expiresIn: '15m' });

    await this.forgetDataService.recoverPassword(email, token);

    return response.status(200).json({ message: 'Email enviado' });
  }


  @Post('/confirm-email')
  async confirmRecoverPassword(
    @BodyParams('token') token: string,
    @Res () response: Res
  ) {
    await this.forgetDataService.confirmRecoverPassword(token);

    return response.status(200).json({
      message: 'Email confirmado con éxito',
      token: token,
    });
  }


  @Post('/change-password')
  async changePassword(
    @BodyParams('password') password: string,
    @BodyParams('token') token: string,
    @Res () response: Res
  ) {
    await this.forgetDataService.changePassword(
      password,
      token,
    );

    return response.status(200).json({
      message: 'Contraseña actualizada con éxito'
    });
  }


  @Post('/change-password-logged')
  @UseBefore(AuthMiddleware)
  async changePasswordLogged(
    @BodyParams('id') id: number,
    @BodyParams('password') password: string,
    @Res () response: Res
  ) {
    await this.forgetDataService.changePasswordLogged(
      id,
      password
    );

    return response.status(200).json({ message: 'Contraseña actualizada con éxito' });
  }


  @Put('/update-personal-data')
  @UseBefore(AuthMiddleware)
  async updatePersonalData(
    @BodyParams('id') id: number,
    @BodyParams('img_profile') img_profile: string,
    @BodyParams('social_media') social_media: [],
    @Res () response: Res
  ) {
    await this.usersService.updatePersonalData(
      id,
      img_profile,
      social_media
    );

    return response.status(200).json({ message: 'Datos actualizados con exito' });
  }


  @Post('/complete-data')
  @UseBefore(AuthMiddleware)
  async completeData(
    @BodyParams('id') id: number,
    @BodyParams('img_profile') img_profile: string,
    @BodyParams('birthdate') birthdate: string,
    @BodyParams('age') age: number,
    @BodyParams('gender') gender: string,
    @BodyParams('birthplace') birthplace: string,
    @BodyParams('state') state: string,
    @BodyParams('city') city: string,
    @BodyParams('municipality') municipality: string,
    @BodyParams('parish') parish: string,

    @BodyParams('identification_number') identification_number: string,
    @BodyParams('img_identification') img_identification: string,

    @BodyParams('passport') passport: string,
    @BodyParams('passport_issue_date') passport_issue_date: Date,
    @BodyParams('passport_expiration_date') passport_expiration_date: Date,
		@BodyParams('img_passport') img_passport: string,

    @BodyParams('body_height') body_height: number,
    @BodyParams('body_weight') body_weight: number,
    @BodyParams('flannel_size') flannel_size: string,
    @BodyParams('jacket_size') jacket_size: string,
    @BodyParams('pants_size') pants_size: string,
    @BodyParams('shoe_size') shoe_size: string,

    @BodyParams('vaccine') vaccine: [],

    @BodyParams('activity') activity: string,
    @BodyParams('discipline') discipline: string,
    @BodyParams('category') category: string,
    @BodyParams('level') level: string,
    @BodyParams('other') other: string,
    @BodyParams('disability') disability: string,
    @Res () response: Res
  ) {
    const completeUser = await this.usersService.completeData(
      id,
      img_profile,
      birthdate,
      age,
      gender,
      birthplace,
      state,
      city,
      municipality,
      parish,
      identification_number,
      img_identification,
      passport,
      passport_issue_date,
      passport_expiration_date,
      img_passport,
      body_height,
      body_weight,
      flannel_size,
      jacket_size,
      pants_size,
      shoe_size,
      vaccine,
      activity,
      discipline,
      category,
      level,
      other,
      disability
    );

    return response.status(200).json({
      message: 'Datos actualizados con exito',
      userData: completeUser
    });
  }


  @Post('/check-complete-data')
  @UseBefore(AuthMiddleware)
  async checkCompleteData(
    @BodyParams('id') id: number,
    @Res () response: Res
  ) {
    const checkCompleteData = await this.usersService.checkCompleteData(id);

    return response.status(200).json({
      message: checkCompleteData ? 'Los datos están completos' : 'Los datos están imcompletos',
      user_data_completed: checkCompleteData
    });
  }
}
