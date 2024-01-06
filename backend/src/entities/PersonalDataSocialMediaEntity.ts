import { Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class PersonalDataSocialMedia {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    personal_data_id: number;

    @Column()
    social_media_id: number;
}
