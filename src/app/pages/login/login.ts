import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})

export class Login {

  nombre = '';
  password = '';

  logueado = false;

  usuarioActivo = '';

  constructor(private authService: AuthService) {}

  login(){

    if(
      this.nombre.trim() === '' ||
      this.password.trim() === ''
    ){

      alert('Complete todos los campos');

      return;
    }

    const resultado = this.authService.login(
      this.nombre,
      this.password
    );

    if(resultado.success){

      this.logueado = true;

      this.usuarioActivo = resultado.usuario.nombre;

    }else{

      alert('Nombre o contraseña incorrectos');

    }

  }

  logout(){

    this.logueado = false;

    this.nombre = '';

    this.password = '';

    this.usuarioActivo = '';

  }

}