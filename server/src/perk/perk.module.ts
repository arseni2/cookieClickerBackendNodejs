import {Module} from '@nestjs/common';
import {PerkService} from './perk.service';
import {PerkController} from './perk.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {PerkEntity} from "./entities/perk.entity";

@Module({
    controllers: [PerkController],
    providers: [PerkService],
    imports: [TypeOrmModule.forFeature([PerkEntity])]
})
export class PerkModule {
}
