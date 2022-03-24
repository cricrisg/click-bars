import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Restaurante } from 'src/app/interfaces/restaurante.interface';
import { RestaurantesServiceService } from 'src/app/services/restaurantes-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isLogged: boolean;

  constructor(private router: Router) {
    this.isLogged = false;
  }

  ngOnInit(): void {

  }

  ngDoCheck() {
    this.isLogged = (localStorage.getItem('token') !== null) ? true : false;
  }

  exitSession() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

}
