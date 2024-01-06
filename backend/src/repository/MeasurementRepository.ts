import {Injectable} from "@tsed/di";
import { getRepository } from 'typeorm';
import { Measurement } from '../entities/MeasurementEntity';

@Injectable()
export class MeasurementRepository {
    private measurementsRepository = getRepository(Measurement)

    async findById(id: number) {
        return await this.measurementsRepository.findOne({ where: { id: id } });
    }

    async save(measurement: Measurement) {
        return await this.measurementsRepository.save(measurement);
    }

    async delete(id: number) {
        return await this.measurementsRepository.delete(id);
    }

    async update(measurement: Measurement) {
        return await this.measurementsRepository.update(measurement.id, measurement);
    }
}
