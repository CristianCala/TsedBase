import {Injectable} from "@tsed/di";
import { getRepository } from 'typeorm';
import { Sport } from "../entities/SportEntity";

@Injectable()
export class SportRepository {
    private sportRepository = getRepository(Sport)

    async findById(id: number) {
        return await this.sportRepository.findOne({ where: { sport_id: id } });
    }

    async findAll() {
        return await this.sportRepository.find();
    }

    async save(sport: Sport) {
        return await this.sportRepository.save(sport);
    }

    async delete(id: number) {
        return await this.sportRepository.delete(id);
    }
}
