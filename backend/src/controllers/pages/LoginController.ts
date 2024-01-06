import { Controller } from '@tsed/di';
import { Get, Post, Res, BodyParams, UseBefore } from '@tsed/common';
import jwt from 'jsonwebtoken';
import { UsersService } from '../../services/UserService';
import { ValidateLoginMiddleware } from '../../middlewares/ValidateLoginMiddleware';

@Controller('/login')
export class LoginController {
	constructor(private usersService: UsersService) {}

	@Post('/')
	@UseBefore(ValidateLoginMiddleware)
	async login(
		@BodyParams('nicknameOrEmail') nicknameOrEmail: string,
		@BodyParams('password') password: string,
		@Res() response: Res
	) {
		const user = await this.usersService.authenticateUser(
			nicknameOrEmail,
			password
		);

		const token = jwt.sign(
			{ userId: user.id, email: user.email },
			process.env.JWT_SECRET!,
			{ expiresIn: '2h' }
		);

		return response.status(200).json({
			message: 'Login exitoso',
			token: 'Bearer ' + token,
			user: user
		});
	}

	@Get('/logout')
	async logout(@Res() response: Res) {
		return response.status(200).json({
			message: 'Logout exitoso'
		});
	}
}
