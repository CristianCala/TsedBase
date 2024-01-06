import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';


@Entity()
export class PersonalData {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    second_name: string;

    @Column()
    last_name: string;

    @Column()
    second_last_name: string;

    @Column({ nullable: true })
    birthdate: Date;

    @Column({ nullable: true })
    age: number;

    @Column({ nullable: true })
    gender: string;

    @Column({ nullable: true })
    birthplace: string;

    @Column({ nullable: true })
    state: string;

    @Column({ nullable: true })
    city: string;

    @Column({ nullable: true })
    municipality: string;

    @Column({ nullable: true })
    parish: string;

    @Column({ nullable: true })
    identification_number: string;

    @Column({ nullable: true })
    img_identification: string;

    @Column({ nullable: true })
    birth_certificate_number: number;

    @Column({ nullable: true })
    img_birth_certificate: string;

    @Column({ nullable: true })
    passport_id: number;

    @Column({ nullable: true })
    sport_id: number;

    @Column({ nullable: true })
    measurements_id: number;

    @Column({ nullable: true })
    event_id: number;
}
