import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';


@Entity()
export class PersonalDataVaccine {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    personal_data_id: number;

    @Column()
    vaccine_id: number;
}
