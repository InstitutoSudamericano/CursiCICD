import { Injectable } from '@nestjs/common';

@Injectable()
export class UsuariosService {
  private usuarios = [
    {
      id: 1,
      nombre: 'Ana Pérez',
      correo: 'ana@gmail.com',
      rol: 'Administrador',
      estado: 'Activo',
    },
    {
      id: 2,
      nombre: 'Carlos Ruiz',
      correo: 'carlos@gmail.com',
      rol: 'Lector',
      estado: 'Activo',
    },
  ];

  obtenerUsuarios() {
    return this.usuarios;
  }

  obtenerUsuarioPorId(id: number) {
    return this.usuarios.find(usuario => usuario.id === id);
  }

  crearUsuario(usuario: any) {
    const nuevoUsuario = {
      id: this.usuarios.length + 1,
      ...usuario,
    };

    this.usuarios.push(nuevoUsuario);
    return nuevoUsuario;
  }

  actualizarUsuario(id: number, datos: any) {
    const usuario = this.obtenerUsuarioPorId(id);

    if (!usuario) {
      return { mensaje: 'Usuario no encontrado' };
    }

    Object.assign(usuario, datos);
    return usuario;
  }

  eliminarUsuario(id: number) {
    const indice = this.usuarios.findIndex(usuario => usuario.id === id);

    if (indice === -1) {
      return { mensaje: 'Usuario no encontrado' };
    }

    this.usuarios.splice(indice, 1);
    return { mensaje: 'Usuario eliminado correctamente' };
  }
}