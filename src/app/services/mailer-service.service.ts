import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MailerServiceService {
  endpoint: string = environment.apiUrl;
  constructor(private http: HttpClient) { }
  sendMail(email: string) {
    return this.http.post<any>(`${this.endpoint}/email`, {
      email
    })
  }
}
