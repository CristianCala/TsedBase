import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Vaccine {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    type: string;

    @Column()
    date_applied: Date;

    @Column()
    img_vaccine: string;
}
