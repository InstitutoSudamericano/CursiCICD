import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LibroAutorModule } from './libro-autor/libro-autor.module';

@Module({
  imports: [LibroAutorModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
