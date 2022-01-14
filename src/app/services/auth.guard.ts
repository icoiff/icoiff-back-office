import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable({
  providedIn: "root",
})
export class AuthGuard implements CanActivate {
  constructor(public authService: AuthService, public router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.authService.isLoggedIn) {
      localStorage.removeItem("access_token");
      localStorage.removeItem("user_id");
      this.router.navigate(["auth/login"]);
    } else {
      const token = localStorage.getItem("access_token");
      this.authService.verifyToken(token).subscribe(
        (data) => {
          return true;
        },
        (error) => {
          localStorage.removeItem("access_token");
          localStorage.removeItem("user_id");
          this.router.navigate(["auth/login"]);
        }
      );
      return true;
    }
    return true;
  }
}
