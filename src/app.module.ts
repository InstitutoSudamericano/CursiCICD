import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AutoresModule } from './autores/autores.module';

@Module({
  imports: [AutoresModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
