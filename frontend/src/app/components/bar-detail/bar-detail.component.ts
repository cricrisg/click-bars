
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/interfaces/cliente.interface';
import { Restaurante } from 'src/app/interfaces/restaurante.interface';
import { ClientesService } from 'src/app/services/clientes.service';
import { RestaurantesServiceService } from 'src/app/services/restaurantes-service.service';

@Component({
  selector: 'app-bar-detail',
  templateUrl: './bar-detail.component.html',
  styleUrls: ['./bar-detail.component.css']
})
export class BarDetailComponent implements OnInit {

  restaurante: Restaurante | undefined;
  date: string = "";
  disponibilidad: boolean;
  isLogged: boolean;
  cliente: Cliente | undefined;
  formulario: FormGroup;


  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private restaurantesService: RestaurantesServiceService,
    private clientesService: ClientesService
  ) {

    this.disponibilidad = false;
    this.isLogged = false;

    this.formulario = new FormGroup({
      fecha: new FormControl('', [
        Validators.required
      ]),
      comensales: new FormControl('', [
        Validators.required
      ]),
      hora: new FormControl('', [
        Validators.required
      ])
    })
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(async params => {
      let id = parseInt(params['idrestaurante']);
      this.restaurante = await this.restaurantesService.getById(id);
    });
  }

  // Comprobar disponibilidad de mesas en el bar
  checkDisponibilidad(date: string) {
    try {
      this.activatedRoute.params.subscribe(async params => {
        let id = parseInt(params['idrestaurante']);
        let response = await this.restaurantesService.getReservas(id, date);

        if (response.num_reservas < response.mesas || response.num_reservas === 0) {
          this.disponibilidad = true;
        } else {
          this.disponibilidad = false;
        }
        this.checkLogin();
      })
    } catch (error) {
      console.log(error);
    }
    return this.disponibilidad
  }

  // Crear una reserva
  async createReserva(pformulario: any) {

    try {
      let cliente = await this.clientesService.getCliente();

      this.activatedRoute.params.subscribe(async params => {
        let id = parseInt(params['idrestaurante']);

        await this.restaurantesService.createReserva(pformulario.value, cliente.id, id);
      });

    } catch (error) {
      console.log(error);

    }

    this.router.navigate(['/perfil']);

  }

  // Comprobar si el cliente está logeado
  async checkLogin() {
    if (localStorage.getItem('token')) {
      this.isLogged = true;
      this.cliente = await this.clientesService.getCliente();
    } else {
      console.log('falta el token');
      this.router.navigate(['/login']);
    }
  }

  // Validaciones del formulario
  checkForm(pInputName: string, pError: string) {
    if (this.formulario.get(pInputName)?.hasError(pError) && this.formulario.get(pInputName)?.touched) {
      return true;
    } else {
      return false;
    }
  }

}









