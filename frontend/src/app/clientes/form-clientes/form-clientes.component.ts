import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-form-clientes',
  templateUrl: './form-clientes.component.html',
  styleUrls: ['./form-clientes.component.css']
})
export class FormClientesComponent implements OnInit {

  formulario: FormGroup;

  constructor(
    private clientesService: ClientesService,
    private router: Router
  ) {

    this.formulario = new FormGroup({
      nombre: new FormControl(),
      apellidos: new FormControl(),
      direccion: new FormControl(),
      email: new FormControl(),
      edad: new FormControl(),
      genero: new FormControl(),
      cuota: new FormControl(),
      fecha_nacimiento: new FormControl(),
      dni: new FormControl()

    })
  }

  ngOnInit(): void {
  }

  async onSubmit() {
    try {
      const response = this.clientesService.registro(this.formulario.value);
      // console.log(response);
      this.router.navigate(['/clientes']);

    } catch (err) {
      console.log(err);

    }
  }

}
