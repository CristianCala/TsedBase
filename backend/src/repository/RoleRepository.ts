import {Injectable} from "@tsed/di";
import { getRepository } from 'typeorm';
import { Role } from '../entities/RoleEntity';

@Injectable()
export class RoleRepository {
    private roleRepository = getRepository(Role)

    async findById(id: number) {
        return await this.roleRepository.findOne({ where: { role_id: id } });
    }

    async findAll() {
        return await this.roleRepository.find();
    }
}
