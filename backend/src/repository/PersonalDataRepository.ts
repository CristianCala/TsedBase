import {Injectable} from "@tsed/di";
import { getRepository } from 'typeorm';
import { PersonalData } from '../entities/PersonalDataEntity';


@Injectable()
export class PersonalDataRepository {
    private personalDataRepository = getRepository(PersonalData);

    async findAll() {
        return await this.personalDataRepository.find();
    }

    async create(personalData: PersonalData) {
        return await this.personalDataRepository.save(personalData);
    }

    async findById(id: number) {
        return await this.personalDataRepository.findOne({ where: { id } });
    }

    async save(personalData: PersonalData) {
        return await this.personalDataRepository.save(personalData);
    }

    async delete(id: number) {
        return await this.personalDataRepository.delete(id);
    }

    async update(id: number, personalData: PersonalData) {
        return await this.personalDataRepository.update(id, personalData);
    }
}
