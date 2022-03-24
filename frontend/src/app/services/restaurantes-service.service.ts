import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Restaurante } from '../interfaces/restaurante.interface';

@Injectable({
  providedIn: 'root'
})
export class RestaurantesServiceService {

  private baseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'http://localhost:3000/api/restaurantes';
  }

  getAll(page: number = 1): Promise<any> {
    return firstValueFrom(this.httpClient.get<any>(`${this.baseUrl}?page=${page}`));
  }

  getById(id: number): Promise<any> {
    return firstValueFrom(this.httpClient.get<any>(this.baseUrl + '/' + id));
  }

  getReservas(id: number, pfecha: string): Promise<any> {
    return firstValueFrom(this.httpClient.get<any>(`${this.baseUrl}/reservas/disponibles/${id}/${pfecha}`));
  }

  createReserva(reserva: { fecha: string, comensales: number, hora: string }, pclienteId: number, pId: number): Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        authorization: localStorage.getItem('token')!
      })
    }

    return firstValueFrom(this.httpClient.post<any>(`${this.baseUrl}/reserva/${pId}/${pclienteId}`, reserva, httpOptions));
  }

  deleteReserva(idReserva: number): Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        authorization: localStorage.getItem('token')!
      })
    }
    return firstValueFrom(this.httpClient.delete<any>(this.baseUrl + '/eliminar/' + idReserva, httpOptions))
  }

  modifyReserva(reserva: { fecha: string, comensales: number, hora: string }, pId: number): Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        authorization: localStorage.getItem('token')!
      })
    }

    return firstValueFrom(this.httpClient.put<any>(this.baseUrl + '/modificar/' + pId, reserva, httpOptions))

  }
}
