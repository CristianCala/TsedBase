import {Injectable} from "@tsed/di";
import { getRepository } from 'typeorm';
import { Vaccine } from '../entities/VaccineEntity';
import { PersonalDataVaccine } from "../entities/PersonalDataVaccine";



@Injectable()
export class VaccineRepository {
    private vaccineRepository = getRepository(Vaccine)
    private personalDataVaccineRepository = getRepository(PersonalDataVaccine)

    async findById(id: number): Promise<Vaccine | null | undefined> {
        const result = await this.vaccineRepository.findOne({ where: { id } });
        return result || undefined;
    }

    async findByPersonalDataId(personalDataId: number): Promise<PersonalDataVaccine[]> {
        return this.personalDataVaccineRepository.find({
            where: { personal_data_id: personalDataId },
        });
    }

    async save(vaccine: Vaccine): Promise<Vaccine> {
        return this.vaccineRepository.save(vaccine);
    }

    async savePersonalDataVaccine(
        personalDataVaccine: PersonalDataVaccine
    ): Promise<PersonalDataVaccine> {
        return this.personalDataVaccineRepository.save(personalDataVaccine);
    }

    async delete(
        personalDataId: number,
        vaccineId: number
    ): Promise<void> {
        await this.personalDataVaccineRepository.delete({
            personal_data_id: personalDataId,
        });
        await this.vaccineRepository.delete(vaccineId);
    }

    async findAndCountAll(): Promise<[Vaccine[], number]> {
        return this.vaccineRepository.findAndCount();
    }
}
