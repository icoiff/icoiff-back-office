import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ManageClientsService {
  endpoint: string = environment.apiUrl;
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(    private http: HttpClient) { }
  getClients() {
    return this.http.get<any>(`${this.endpoint}/customer`)
  }
  getClient(_id: string) {
    return this.http.get<any>(`${this.endpoint}/customer/${_id}`)
  }
}
