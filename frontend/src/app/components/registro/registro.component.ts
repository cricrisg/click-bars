import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/services/usuarios.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  formulario: FormGroup;
  msg_errores: string[];

  constructor(
    private usuariosService: UsuariosService,
    private router: Router
  ) {

    this.formulario = new FormGroup({
      username: new FormControl(),
      nombre: new FormControl(),
      email: new FormControl(),
      password: new FormControl(),
    });

    this.msg_errores = [];
  }

  ngOnInit(): void { }

  async onSubmit() {
    try {
      const response = await this.usuariosService.registro(this.formulario.value);
      Swal.fire('Registro correcto', 'Usuario registrado con éxito', 'success');
      this.router.navigate(['/login']);

    } catch (err: any) {
      this.msg_errores = err.error.map((item: any) => item.msg);
    }



  }

}
