import {Injectable} from '@nestjs/common';
import {CreateUserDto} from './dto/create-user.dto';
import {UpdateUserDto} from './dto/update-user.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {UserEntity} from "./entities/user.entity";
import {Repository} from "typeorm";

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity)
        private userRepo: Repository<UserEntity>,
    ) {
    }

    async create(createUserDto: CreateUserDto) {
        const newUser = await this.userRepo.save(createUserDto);

        if (createUserDto.refId) {
            const user = await this.userRepo.findOne({
                where: {
                    id: createUserDto.refId
                }
            });
            user.referrals.push(newUser)
        }
        return newUser
    }

    findOneById(id: number) {
        return this.userRepo.findOne({where: {id: id}});
    }

    update(id: number, updateUserDto: UpdateUserDto) {
        return this.userRepo.update(id, updateUserDto)
    }

    remove(id: number) {
        return this.userRepo.delete(id)
    }
}
