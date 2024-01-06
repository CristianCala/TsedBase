import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn } from "typeorm";
import { User } from "./UserEntity";


@Entity()
export class Role {
    @PrimaryGeneratedColumn()
    role_id: number;

    @Column()
    name: string;

    @OneToMany(() => User, (user) => user.role)
    @JoinColumn({ name: "user_id" })
    users: User[];
}
