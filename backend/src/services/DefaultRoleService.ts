import { Role } from "../entities/RoleEntity";
import { getRepository } from "typeorm";

export class DefaultRoleService {
    async create() {
        const defaultRoles = [
            { role_id: 1, name: 'super admin' }, //all permissions
            { role_id: 2, name: 'admin' },       //read, write, update, delete
            { role_id: 3, name: 'supervisor' },  //read, write, update, delete only for his own athletes
            { role_id: 4, name: 'colaborator' }, //read, write, update, delete only for register user, other user, or legal representant
            { role_id: 5, name: 'athlete' },     //read, write, update only for his own data
            { role_id: 6, name: 'auditor' },     //read only
        ];

        const roleRepository = getRepository(Role);

        await roleRepository.createQueryBuilder()
            .delete()
            .where("role_id NOT IN (:...ids)", { ids: [1, 2, 3, 4, 5, 6] })
            .execute();

        const existingRolesCount = await roleRepository.count();
        if (existingRolesCount >= 6) {
            return;
        }

        for (const roleData of defaultRoles) {
            const role = new Role();
            role.role_id = roleData.role_id;
            role.name = roleData.name;
            await roleRepository.save(role);
        }
    }
}