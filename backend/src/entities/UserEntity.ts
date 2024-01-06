import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToOne } from "typeorm";
import { Role } from "./RoleEntity";
import { PersonalData } from "./PersonalDataEntity";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    phone: string;

    @Column({ nullable: true })
    img_profile: string;

    @Column({ default: false })
    confirmation_user: boolean;

    @Column()
    role_id: number;

    @ManyToOne(() => Role, (role) => role.users)
    @JoinColumn({ name: "role_id" })
    role: Role;

    @OneToOne(() => PersonalData)
    @JoinColumn({ name: "personal_data_id" })
    personal_data: PersonalData;

    @Column()
    personal_data_id: number;
}
