import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientesService } from 'src/app/services/clientes.service';
import { RestaurantesServiceService } from 'src/app/services/restaurantes-service.service';

@Component({
  selector: 'app-edit-reserva',
  templateUrl: './edit-reserva.component.html',
  styleUrls: ['./edit-reserva.component.css']
})
export class EditReservaComponent implements OnInit {


  constructor(
    private restaurantesServices: RestaurantesServiceService,
    private clientesService: ClientesService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit() {

  }

  modifyReserva(pformulario: any) {
    this.activatedRoute.params.subscribe(async params => {
      let id = parseInt(params['idreserva']);
      await this.restaurantesServices.modifyReserva(pformulario.value, id);

    });

    this.router.navigate(['/perfil']);
  }
}
