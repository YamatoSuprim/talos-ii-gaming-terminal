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

  usuarios: any[] = [];
  constructor(){

  const datos = localStorage.getItem('usuarios');

  if(datos){
    this.usuarios = JSON.parse(datos);
  }

}

  registrar(){

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