import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Measurement {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: true })
    body_height: number;

    @Column({ nullable: true })
    body_weight: number;

    @Column({ nullable: true })
    flannel_size: string;

    @Column({ nullable: true })
    jacket_size: string;

    @Column({ nullable: true })
    pants_size: string;

    @Column({ nullable: true })
    shoe_size: string;
}
