import { Test, TestingModule } from '@nestjs/testing';
import { LibroAutorService } from './libro-autor.service';

describe('LibroAutorService', () => {
  let service: LibroAutorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LibroAutorService],
    }).compile();

    service = module.get<LibroAutorService>(LibroAutorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
