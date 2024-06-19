import { Test, TestingModule } from '@nestjs/testing';
import { PerkController } from './perk.controller';
import { PerkService } from './perk.service';

describe('PerkController', () => {
  let controller: PerkController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PerkController],
      providers: [PerkService],
    }).compile();

    controller = module.get<PerkController>(PerkController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
