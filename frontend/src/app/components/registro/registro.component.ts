import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  formulario: FormGroup;

  constructor(
    private clientesService: ClientesService,
    private router: Router
  ) {

    this.formulario = new FormGroup({
      nombre: new FormControl('', [
        Validators.required
      ]),
      apellidos: new FormControl('', [
        Validators.required
      ]),
      email: new FormControl('', [
        Validators.required
      ]),
      password: new FormControl('5447k', [
        Validators.required
      ])
    })
  }

  ngOnInit(): void {
  }

  async onSubmit() {
    await this.clientesService.registro(this.formulario.value);
    this.router.navigate(['/login']);

  }

  checkForm(pInputName: string, pError: string): boolean {
    if (this.formulario.get(pInputName)?.hasError(pError) && this.formulario.get(pInputName)?.touched) {
      return true;
    } else {
      return false;
    }
  }

}
