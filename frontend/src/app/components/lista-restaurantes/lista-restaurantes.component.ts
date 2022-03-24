import { Component, EventEmitter, OnInit } from '@angular/core';
import { Restaurante } from 'src/app/interfaces/restaurante.interface';
import { RestaurantesServiceService } from 'src/app/services/restaurantes-service.service';

@Component({
  selector: 'app-lista-restaurantes',
  templateUrl: './lista-restaurantes.component.html',
  styleUrls: ['./lista-restaurantes.component.css']
})
export class ListaRestaurantesComponent implements OnInit {

  arrRestaurantes: Restaurante[];
  page: number = 1;

  constructor(private restaurantesService: RestaurantesServiceService) {
    this.arrRestaurantes = [];
  }

  async ngOnInit(): Promise<void> {
    this.arrRestaurantes = await this.restaurantesService.getAll();
  }

  async changePage(siguiente: boolean) {

    if (siguiente) {
      this.page++;
    } else {
      this.page--;
    }
    const response = await this.restaurantesService.getAll(this.page);
    this.arrRestaurantes = response;
  }


}
