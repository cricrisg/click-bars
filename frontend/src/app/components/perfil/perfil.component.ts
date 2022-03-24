import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/interfaces/cliente.interface';
import { ClientesService } from 'src/app/services/clientes.service';
import { RestaurantesServiceService } from 'src/app/services/restaurantes-service.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  cliente: Cliente | undefined;
  reservas: any[] = [];

  constructor(
    private clientesService: ClientesService,
    private restaurantesService: RestaurantesServiceService
  ) { }

  async ngOnInit(): Promise<void> {
    this.cliente = await this.clientesService.getCliente();

    this.reservas = await this.clientesService.getReservas();
    console.log(this.reservas);
  }

  async deleteReserva(id: number) {
    await this.restaurantesService.deleteReserva(id);
  }



}
