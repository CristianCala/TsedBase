import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class SocialMedia {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    url: string;
}
