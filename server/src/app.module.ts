import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {TypeOrmModule} from '@nestjs/typeorm';
import {UserModule} from './user/user.module';
import {CommunityModule} from './community/community.module';
import {PerkModule} from './perk/perk.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'tai.db.elephantsql.com',
      port: 5432,
      username: 'mcaoyhdc',
      password: 'frlsxWPnuOVx_gOrFm7mzFUxz30oFiqz',
      database: 'mcaoyhdc',
      autoLoadEntities: true,
      synchronize: true,
      logging: "all"
    }),
    UserModule,
    CommunityModule,
    PerkModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
