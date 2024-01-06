import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Event {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: true })
    name: string;

    @Column({ nullable: true })
    departure_date: Date;

    @Column({ nullable: true })
    arrival_date: Date;

    @Column({ nullable: true })
    return_date: Date;

    @Column({ nullable: true })
    flight_number: string;

    @Column({ nullable: true })
    departure_country: string;

    @Column({ nullable: true })
    destination_country: string;
}
