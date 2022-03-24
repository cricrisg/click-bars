import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Cliente } from '../interfaces/cliente.interface';


@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  private baseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'http://localhost:3000/api/clientes';
  }

  getAll(page: number = 1): Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        authorization: localStorage.getItem('token')!
      })
    }

    return firstValueFrom(this.httpClient.get<any>(this.baseUrl + '?page=' + page, httpOptions));
  }


  registro(formValue: Cliente): Promise<any> {

    const httpOptions = {
      headers: new HttpHeaders({
        authorization: localStorage.getItem('token')!
      })
    }
    return firstValueFrom(this.httpClient.post<any>(this.baseUrl, formValue, httpOptions));
  }

}
