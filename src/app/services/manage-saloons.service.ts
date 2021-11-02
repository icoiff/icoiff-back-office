import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ManageSaloonsService {
  endpoint: string = 'http://localhost:3000';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(    private http: HttpClient) { }
  getSaloons() {
    return this.http.get<any>(`${this.endpoint}/salon`)
  }
}
