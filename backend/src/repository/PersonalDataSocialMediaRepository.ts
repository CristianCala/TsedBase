import {Injectable} from "@tsed/di";
import { getRepository } from 'typeorm';
import { PersonalDataSocialMedia } from '../entities/PersonalDataSocialMediaEntity';


@Injectable()
export class PersonalDataSocialMediaRepository {
    private personalDataSocialMediaRepository = getRepository(PersonalDataSocialMedia);

    async findAll() {
        return await this.personalDataSocialMediaRepository.find();
    }

    async create(personalDataSocialMedia: PersonalDataSocialMedia) {
        return await this.personalDataSocialMediaRepository.save(personalDataSocialMedia);
    }

    async findById(id: number) {
        return await this.personalDataSocialMediaRepository.findOne({ where: { id } });
    }

    async update(personalDataSocialMedia: PersonalDataSocialMedia) {
        return await this.personalDataSocialMediaRepository.save(personalDataSocialMedia);
    }

    async delete(id: number) {
        return await this.personalDataSocialMediaRepository.delete(id);
    }

    async save(personalDataSocialMedia: PersonalDataSocialMedia) {
        return await this.personalDataSocialMediaRepository.save(personalDataSocialMedia);
    }
}
