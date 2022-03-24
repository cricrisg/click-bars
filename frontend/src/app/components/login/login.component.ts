import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formulario: FormGroup;

  constructor(
    private clientesService: ClientesService,
    private router: Router) {

    this.formulario = new FormGroup({
      email: new FormControl('marina@hotmail.com'),
      password: new FormControl('5415k')
    })
  }

  ngOnInit(): void {
  }

  async onSubmit() {
    try {
      const response = await this.clientesService.login(this.formulario.value);

      localStorage.setItem('token', response.token)
      this.router.navigate(['/home']);

    } catch (err) {
      console.log(err);

    }

  }

}
