import { Middleware, Req, Res, Next } from "@tsed/common";
import jwt from "jsonwebtoken";

@Middleware()
export class AuthMiddleware {
    async use(@Req() request: Req, @Res() response: Res, @Next() next: Next) {
        const token = request.headers.authorization?.split(" ")[1];

        if (!token) {
            return response.status(401).json({
                message: "No se recibió token",
                tokenStatus: false
            });
        }

        try {
            const decodedToken = jwt.verify(token, process.env.JWT_SECRET!);
            request.user = decodedToken;

            next();
        } catch (error) {
            return response.status(401).json({
                message: "Token inválido",
                tokenStatus: false
            });
        }
    }
}
