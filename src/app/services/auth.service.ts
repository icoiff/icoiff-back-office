import { Injectable } from "@angular/core";
import { User } from "../models/user";
import { Observable, throwError } from "rxjs";
import { catchError, map } from "rxjs/operators";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from "@angular/common/http";
import { Router } from "@angular/router";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  endpoint: string = environment.apiUrl;
  headers = new HttpHeaders().set("Content-Type", "application/json");
  currentUser = {};

  constructor(private http: HttpClient, public router: Router) {}

  // Sign-in
  logIn(user: User) {
    return this.http.post<any>(`${this.endpoint}/auth/login`, user);
  }

  resetPassword(payload) {
    return this.http.post<any>(`${this.endpoint}/auth/reset-password`, payload);
  }

  getToken() {
    return localStorage.getItem("access_token");
  }
  verifyToken(token: string) {
    this.headers.set("Authorization", `Bearer ${token}`);
    return this.http.get(`${this.endpoint}/auth/verifyauthentication`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem("access_token");
    return authToken !== null ? true : false;
  }

  doLogout() {
    localStorage.removeItem("user_id");
    if (localStorage.removeItem("access_token") == null) {
      this.router.navigate(["auth/login"]);
    }
  }

  // Error
  handleError(error: HttpErrorResponse) {
    let msg = "";
    if (error.error instanceof ErrorEvent) {
      // client-side error
      msg = error.error.message;
    } else {
      // server-side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(msg);
  }
}
