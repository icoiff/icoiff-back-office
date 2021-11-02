import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ManageClientsService {
  endpoint: string = 'http://localhost:3000';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(    private http: HttpClient) { }
  getClients() {
    return this.http.get<any>(`${this.endpoint}/customer`)
  }
}
