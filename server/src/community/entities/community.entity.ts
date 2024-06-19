import {Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import {UserEntity} from "../../user/entities/user.entity";

@Entity()
export class CommunityEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(() => UserEntity)
    @JoinColumn()
    author: UserEntity

    @OneToMany(() => UserEntity, (user) => user.community)
    members: UserEntity[]
}
