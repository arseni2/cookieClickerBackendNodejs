import { Module } from '@nestjs/common';
import { CommunityService } from './community.service';
import { CommunityController } from './community.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {CommunityEntity} from "./entities/community.entity";

@Module({
  controllers: [CommunityController],
  providers: [CommunityService],
  imports: [TypeOrmModule.forFeature([CommunityEntity])]
})
export class CommunityModule {}
