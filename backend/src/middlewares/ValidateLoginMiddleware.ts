import { Middleware, Req, Res, Next } from "@tsed/common";
import { User } from "../entities/UserEntity";
import { getRepository } from "typeorm";
import { Unauthorized } from "@tsed/exceptions";

@Middleware()
export class ValidateLoginMiddleware {
  async use(@Req() req: Req, @Res() res: Res, @Next() next: Next) {
    const { nicknameOrEmail, password } = req.body;

    if (!nicknameOrEmail) {
      throw new Unauthorized('Correo requerido.');
    }

    if (!password) {
      throw new Unauthorized('Contraseña requerida.');
    }

    const userRepository = getRepository(User);
    const user = await userRepository.findOne({
      where: [
        { email: nicknameOrEmail },
      ]
    });

    if (user && !user.confirmation_user) {
      throw new Unauthorized('Usuario no confirmado.');
    }

    if (!user) {
      throw new Unauthorized('Usuario no encontrado.');
    }

    next();
  }
}
