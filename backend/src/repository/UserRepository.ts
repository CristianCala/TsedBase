import { Injectable } from "@tsed/di";
import { getRepository } from 'typeorm';
import { User } from '../entities/UserEntity';


@Injectable()
export class UserRepository {
    private userRepository = getRepository(User);

    async findAll() {
        return await this.userRepository.find();
    }

    async create(user: User) {
        return await this.userRepository.save(user);
    }

    async findById(id: number) {
        return await this.userRepository.findOne({ where: { id } });
    }

    async findByEmail(email: string) {
        return await this.userRepository.findOne({ where: { email } });
    }

    async findByPhone(phone: string) {
        return await this.userRepository.findOne({ where: { phone } });
    }

    async update(user: User) {
        return await this.userRepository.save(user);
    }

    async delete(id: number) {
        return await this.userRepository.delete(id);
    }

    async updateById(id: number, user: User) {
        return await this.userRepository.update(id, user);
    }
}
