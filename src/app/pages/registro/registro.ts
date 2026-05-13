import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './registro.html',
  styleUrl: './registro.css'
})

export class Registro {

  nombre = '';
  correo = '';
  password = '';

  usuarios: any[] = [

    {
      nombre: 'Endministrator',
      correo: 'admin@endfield.com'
    },

    {
      nombre: 'Ember',
      correo: 'ember@endfield.com'
    },

    {
      nombre: 'Fluorite',
      correo: 'fluorite@endfield.com'
    },

    {
      nombre: 'Perlica',
      correo: 'perlica@endfield.com'
    },

    {
      nombre: 'Wulfen',
      correo: 'wulfen@endfield.com'
    },

    {
      nombre: 'Talos',
      correo: 'talos@endfield.com'
    },

    {
      nombre: 'Operator-X',
      correo: 'x@endfield.com'
    },

    {
      nombre: 'Aegis',
      correo: 'aegis@endfield.com'
    },

    {
      nombre: 'Nova',
      correo: 'nova@endfield.com'
    },

    {
      nombre: 'Oripathy',
      correo: 'ori@endfield.com'
    }

  ];

  constructor(){

    const datos = localStorage.getItem('usuarios');

    if(datos){

      this.usuarios = JSON.parse(datos);

    }else{

      localStorage.setItem(
        'usuarios',
        JSON.stringify(this.usuarios)
      );

    }

  }

  registrar(){

    const textoValido = /^[a-zA-Z0-9 ]+$/;

    if(
      !textoValido.test(this.nombre)
    ){

      alert('Nombre inválido');

      return;
    }

    const nuevoUsuario = {
      nombre: this.nombre,
      correo: this.correo
    };

    this.usuarios.push(nuevoUsuario);

    localStorage.setItem(
      'usuarios',
      JSON.stringify(this.usuarios)
    );

    alert('Operador registrado');

    this.nombre = '';
    this.correo = '';
    this.password = '';
  }

}