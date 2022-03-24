import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UsuariosService } from 'src/app/services/usuarios.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formulario: FormGroup;

  constructor(
    private usuariosService: UsuariosService
  ) {

    this.formulario = new FormGroup({
      email: new FormControl('aaaa@gmail.com'),
      password: new FormControl('12345aF$')
    })
  }

  ngOnInit(): void {
  }

  async onSubmit() {
    try {
      const response = await this.usuariosService.login(this.formulario.value);
      Swal.fire('Bienvenido', 'Login correcto', 'success');
      // Guardamos el token
      localStorage.setItem('token', response.token);
      // llamamos al método del login para que emita que nos hemos logado y le pasamos true.
      this.usuariosService.loginCompleted(true);

    } catch (err: any) {
      // Esto lo hacemos asi porque el back devuelve este objeto concreto
      const { error: msg } = err.error;
      // msg es el alias del objeto, lo podemos usar como nombre de variable
      Swal.fire('Error', msg, 'error');
    }
  }

}
