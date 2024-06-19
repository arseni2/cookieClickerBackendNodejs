import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from 'typeorm';
import { CommunityEntity } from '../../community/entities/community.entity';
import {PerkEntity} from "../../perk/entities/perk.entity";

@Entity()
export class UserEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique: true, type: "varchar"})
    tg_id: string;

    @Column({type: "varchar"})
    username: string;

    @Column({default: 0})
    cookie: number;

    @Column({default: 0})
    multitap: number;

    @ManyToOne(() => CommunityEntity, (community) => community.members)
    community: CommunityEntity

    @OneToMany(() => PerkEntity, (perk) => perk.user)
    perks: PerkEntity[]
}
