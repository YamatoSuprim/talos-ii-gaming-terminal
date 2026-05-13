import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private usuariosDefault = [
    {
      nombre: 'Endministrator',
      correo: 'admin@endfield.com',
      password: 'admin123'
    },
    {
      nombre: 'Ember',
      correo: 'ember@endfield.com',
      password: 'ember123'
    },
    {
      nombre: 'Fluorite',
      correo: 'fluorite@endfield.com',
      password: 'fluorite123'
    },
    {
      nombre: 'Perlica',
      correo: 'perlica@endfield.com',
      password: 'perlica123'
    },
    {
      nombre: 'Wulfen',
      correo: 'wulfen@endfield.com',
      password: 'wulfen123'
    },
    {
      nombre: 'Talos',
      correo: 'talos@endfield.com',
      password: 'talos123'
    },
    {
      nombre: 'Operator-X',
      correo: 'x@endfield.com',
      password: 'x123'
    },
    {
      nombre: 'Aegis',
      correo: 'aegis@endfield.com',
      password: 'aegis123'
    },
    {
      nombre: 'Nova',
      correo: 'nova@endfield.com',
      password: 'nova123'
    },
    {
      nombre: 'Oripathy',
      correo: 'ori@endfield.com',
      password: 'ori123'
    }
  ];

  constructor() {
    this.inicializarUsuarios();
  }

  private inicializarUsuarios() {
    const datos = localStorage.getItem('usuarios');
    
    if (!datos) {
      localStorage.setItem(
        'usuarios',
        JSON.stringify(this.usuariosDefault)
      );
    }
  }

  obtenerUsuarios() {
    return JSON.parse(
      localStorage.getItem('usuarios') || '[]'
    );
  }

  registrarUsuario(nombre: string, correo: string, password: string): {success: boolean, mensaje: string} {
    const usuarios = this.obtenerUsuarios();

    if (usuarios.find((u: any) => u.nombre === nombre)) {
      return { success: false, mensaje: 'El operador ya existe' };
    }

    if (usuarios.find((u: any) => u.correo === correo)) {
      return { success: false, mensaje: 'El correo ya está registrado' };
    }

    const nuevoUsuario = { nombre, correo, password };
    usuarios.push(nuevoUsuario);
    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    return { success: true, mensaje: 'Operador registrado' };
  }

  login(nombre: string, password: string): {success: boolean, usuario: any} {
    const usuarios = this.obtenerUsuarios();
    const usuario = usuarios.find(
      (u: any) => u.nombre === nombre && u.password === password
    );

    if (usuario) {
      return { success: true, usuario };
    }

    return { success: false, usuario: null };
  }
}
