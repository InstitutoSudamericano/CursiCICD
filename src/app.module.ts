import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LibrosModule } from './libros/libros.module';
import { PrestamoModule} from './prestamo/prestamo.module';

@Module({
  imports: [PrestamoModule, LibrosModule ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
