import { Test, TestingModule } from '@nestjs/testing';
import { PerkService } from './perk.service';

describe('PerkService', () => {
  let service: PerkService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PerkService],
    }).compile();

    service = module.get<PerkService>(PerkService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
