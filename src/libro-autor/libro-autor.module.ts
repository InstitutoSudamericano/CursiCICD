import { Module } from '@nestjs/common';
import { LibroAutorService } from './libro-autor.service';
import { LibroAutorController } from './libro-autor.controller';

@Module({
  controllers: [LibroAutorController],
  providers: [LibroAutorService],
})
export class LibroAutorModule {}
