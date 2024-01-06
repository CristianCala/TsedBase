import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Sport {
    @PrimaryGeneratedColumn()
    sport_id: number;

    @Column()
    activity: string;

    @Column()
    discipline: string;

    @Column()
    category: string;

    @Column()
    level: string;

    @Column({ nullable: true })
    other: string;

    @Column({ nullable: true })
    disability: string;
}
