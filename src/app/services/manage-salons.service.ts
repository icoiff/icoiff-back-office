import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { forkJoin } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class ManageSalonsService {
  endpoint: string = environment.apiUrl;
  headers = new HttpHeaders().set("Content-Type", "application/json");

  constructor(private http: HttpClient) {}
  getSalons() {
    return this.http.get<any>(`${this.endpoint}/salon`);
  }
  sendImage(uploadData: FormData) {
    return this.http.post(`${this.endpoint}/file-upload`, uploadData);
  }
  createSalon(salon) {
    return this.http.post(`${this.endpoint}/salon`, salon);
  }
  createManager(manager) {
    return this.http.post(`${this.endpoint}/auth/signup`, manager);
  }
}
