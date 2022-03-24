import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/interfaces/cliente.interface';
import { ClientesService } from '../../services/clientes.service';

@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.css']
})
export class ListaClientesComponent implements OnInit {

  arrClientes: Cliente[] = [];
  page: number;

  constructor(
    private clientesService: ClientesService
  ) {
    this.page = 1;
  }

  async ngOnInit(): Promise<void> {

    try {
      const response = await this.clientesService.getAll();
      this.arrClientes = response;

    } catch (err) {
      console.log(err);
    }


  }

  async changePage(siguiente: boolean) {

    // Cambiamos de pág
    if (siguiente) {
      this.page++
    } else {
      this.page--
    }
    // Volvemos a hacer la peticion
    const response = await this.clientesService.getAll(this.page);
    this.arrClientes = response;
  }

}
