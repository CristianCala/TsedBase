import fs from 'fs';
import path from 'path';
import jwt from 'jsonwebtoken';
import { Controller } from '@tsed/di';
import { Get, Post } from '@tsed/schema';
import { BodyParams, UseBefore, Res, Redirect } from '@tsed/common';
import { UsersService } from '../../services/UserService';
import { SendEmailService } from '../../services/SendEmailService';
import { PathParams } from '@tsed/platform-params';
import { ValidateRegisterMiddleware } from '../../middlewares/ValidateRegisterMiddleware';
import { backUrl, frontUrl } from '../../mixins/constants';


@Controller('/register')
export class RegisterController {
  constructor(private usersService: UsersService) {}

  @Post('/')
  @UseBefore(ValidateRegisterMiddleware)
  async register(
    @BodyParams('role_id') role_id: number,
    @BodyParams('name') name: string,
    @BodyParams('second_name') second_name: string,
    @BodyParams('last_name') last_name: string,
    @BodyParams('second_last_name') second_last_name: string,
    @BodyParams('email') email: string,
    @BodyParams('phone') phone: string,
    @BodyParams('password') password: string,
    @BodyParams('social_media') social_media: [],
    @Res() response: Res
  ) {
    const templatePath = path.join(
      __dirname, '../../../src/templates', 'confirmation-email.html'
    );
    const template = fs.readFileSync(templatePath, 'utf8');

    const user = await this.usersService.create(
      role_id,
      name,
      second_name,
      last_name,
      second_last_name,
      email,
      phone,
      password,
      social_media,
    );

    const confirmationLink = backUrl + '/register/confirm/' + user.id;

    if (user) {
      const sendEmailService = new SendEmailService();
      await sendEmailService.sendEmail(email,name ,confirmationLink ,template);
    }

    const token = jwt.sign(
      { userId: user.id, email: user.email },
      process.env.JWT_SECRET!,
      { expiresIn: '2h'}
    )

    response.setHeader('Authorization', `Bearer ${token}`);

    return response.status(200).json({ token: 'Bearer ' + token });
  }

  @Get('/confirm/:userId')
  @Redirect(frontUrl + '/login')
  async confirm(@PathParams('userId') userId: number) {
    const user = await this.usersService.confirmUser(userId);
    if (user) {
      return 'Usuario confirmado';
    } else {
      return;
    }
  }
}
