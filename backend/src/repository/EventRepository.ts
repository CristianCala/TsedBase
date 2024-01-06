import { Injectable } from '@tsed/di';
import { getRepository } from 'typeorm';
import { Event } from '../entities/EventEntity';


@Injectable()
export class EventRepository {
    private eventRepository = getRepository(Event)

    async findById(id: number) {
        return await this.eventRepository.findOne({ where: { id: id } });
    }

    async findAll() {
        return await this.eventRepository.find();
    }

    async save(event: Event) {
        return await this.eventRepository.save(event);
    }

    async delete(id: number) {
        return await this.eventRepository.delete(id);
    }
}
