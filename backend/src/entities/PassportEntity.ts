import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Passport {
    @PrimaryGeneratedColumn()
    passport_id: number;

    @Column()
    passport: string;

    @Column()
    passport_issue_date: Date;

    @Column()
    passport_expiration_date: Date;

    @Column()
    img_passport: string;
}
