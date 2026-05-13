import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';

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

  constructor(private authService: AuthService){
    this.usuarios = this.authService.obtenerUsuarios();
  }

  registrar(){

    if(
      this.nombre.trim() === '' ||
      this.correo.trim() === '' ||
      this.password.trim() === ''
    ){

      alert('Complete todos los campos');

      return;
    }

    if(this.password.length < 4){

      alert('La contraseña es muy corta');

      return;
    }

    const textoValido = /^[a-zA-Z0-9 ]+$/;

    if(
      !textoValido.test(this.nombre)
    ){

      alert('Nombre inválido');

      return;
    }

    const resultado = this.authService.registrarUsuario(
      this.nombre,
      this.correo,
      this.password
    );

    if(resultado.success){

      alert(resultado.mensaje);

      this.nombre = '';
      this.correo = '';
      this.password = '';

      this.usuarios = this.authService.obtenerUsuarios();

    }else{

      alert(resultado.mensaje);

    }

  }

}