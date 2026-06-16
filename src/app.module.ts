import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuariosModule } from './usuarios/usuarios.module';


import { CategoriasModule } from './categorias/categorias.module';

import { LibrosModule } from './libros/libros.module';
import { PrestamoModule} from './prestamo/prestamo.module';


import { LibroAutorModule } from './libro-autor/libro-autor.module';

@Module({

  imports: [LibroAutorModule, PrestamoModule, LibrosModule,CategoriasModule,UsuariosModule ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
