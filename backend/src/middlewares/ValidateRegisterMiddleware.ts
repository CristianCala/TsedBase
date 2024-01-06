import { Middleware, Req, Res, Next } from '@tsed/common';
import { Unauthorized } from '@tsed/exceptions';


@Middleware()
export class ValidateRegisterMiddleware {
    /* I will remasterized this middleware after...  */
    async use(@Req() req: Req, @Res() res: Res, @Next() next: Next) {
        const { email, password, phone } = req.body;

        const emailRegex = /^\S+@\S+\.\S+$/;

        if (!email || !phone || !password) {
            throw new Unauthorized('Los campos email, teléfono y contraseña son requeridos.');
        }

        if (!emailRegex.test(email)) {
            throw new Unauthorized('Formato de email inválido.');
        }

        next();
    }
}
