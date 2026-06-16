import { Test, TestingModule } from '@nestjs/testing';
import { LibroAutorController } from './libro-autor.controller';
import { LibroAutorService } from './libro-autor.service';

describe('LibroAutorController', () => {
  let controller: LibroAutorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LibroAutorController],
      providers: [LibroAutorService],
    }).compile();

    controller = module.get<LibroAutorController>(LibroAutorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
