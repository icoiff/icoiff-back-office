import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MailerServiceService {
  endpoint: string = 'http://localhost:3000';
  constructor(private http: HttpClient) { }
  sendMail(email: string) {
    return this.http.post<any>(`${this.endpoint}/email`, {
      email
    })
  }
}
