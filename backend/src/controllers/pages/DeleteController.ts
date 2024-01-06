import { Controller } from "@tsed/di";
import { Delete } from "@tsed/schema";
import { BodyParams } from "@tsed/common";
import { UsersService } from "../../services/UserService";


@Controller("/delete")
export class DeleteController {
    constructor(private usersService: UsersService) {}

    @Delete("/")
    async delete(@BodyParams("id") id: number) {
        await this.usersService.delete(id);

        return 'Usuario eliminado con exito';
    }
}
