import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';

@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Get()
  obtenerUsuarios() {
    return this.usuariosService.obtenerUsuarios();
  }

  @Get(':id')
  obtenerUsuarioPorId(@Param('id') id: string) {
    return this.usuariosService.obtenerUsuarioPorId(Number(id));
  }

  @Post()
  crearUsuario(@Body() usuario: any) {
    return this.usuariosService.crearUsuario(usuario);
  }

  @Put(':id')
  actualizarUsuario(@Param('id') id: string, @Body() datos: any) {
    return this.usuariosService.actualizarUsuario(Number(id), datos);
  }

  @Delete(':id')
  eliminarUsuario(@Param('id') id: string) {
    return this.usuariosService.eliminarUsuario(Number(id));
  }
}