import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

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

    @Column({default: false})
    isAutoClicker: boolean;
}
