import { Test, TestingModule } from '@nestjs/testing';
import { MailFolderService } from '../mail-folder.service';

describe('MailFolderService', () => {
  let service: MailFolderService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MailFolderService],
    }).compile();

    service = module.get<MailFolderService>(MailFolderService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
