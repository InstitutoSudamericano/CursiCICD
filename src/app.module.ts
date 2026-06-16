import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriasModule } from './categorias/categorias.module';

import { LibrosModule } from './libros/libros.module';
import { PrestamoModule} from './prestamo/prestamo.module';

@Module({
  imports: [PrestamoModule, LibrosModule,CategoriasModule ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
