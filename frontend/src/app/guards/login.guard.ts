import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { ClientesService } from '../services/clientes.service';


@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(private clientesService: ClientesService) {

  }

  async canActivate() {

    if (localStorage.getItem('token')) {
      // El token existe en localstorage
      // Lanzo petición al back para ver si el token es correcto
      const response = await this.clientesService.getAll();

      if (response.error) {
        // Token incorrecto
        return false;
      }
      // Si el token es correcto devuelve el array de clientes
      return true;
    } else {
      return false;
    }

  }



}
