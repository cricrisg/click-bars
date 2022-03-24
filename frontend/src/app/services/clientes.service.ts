import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom, lastValueFrom } from 'rxjs';
import { Cliente } from '../interfaces/cliente.interface';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  private baseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'http://localhost:3000/api/clientes';
  }

  getCliente(): Promise<Cliente> {

    const httpOptions = {
      headers: new HttpHeaders({
        authorization: localStorage.getItem('token')!
      })
    }
    return firstValueFrom(this.httpClient.get<Cliente>(this.baseUrl + '/' + 'miperfil', httpOptions));
  }

  getReservas(): Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        authorization: localStorage.getItem('token')!
      })
    }

    return firstValueFrom(this.httpClient.get<any>(`${this.baseUrl}/miperfil/misreservas`, httpOptions));
  }

  login(formValue: { email: string, password: string }): Promise<any> {
    return firstValueFrom(this.httpClient.post<any>(this.baseUrl + '/login', formValue))
  }

  registro(formValue: Cliente): Promise<any> {
    return firstValueFrom(this.httpClient.post<any>(this.baseUrl + '/registro', formValue))
  }
}
