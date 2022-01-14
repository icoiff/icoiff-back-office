import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
})
export class LoginComponent implements OnInit {
  signinForm: FormGroup;
  error = "";

  constructor(
    public fb: FormBuilder,
    public authService: AuthService,
    public router: Router
  ) {
    this.signinForm = this.fb.group({
      email: [""],
      password: [""],
    });
  }

  ngOnInit() {}

  loginUser() {
    this.error = "";
    this.authService.logIn(this.signinForm.value).subscribe(
      (res: any) => {
        if (res.user.role === "Admin") {
          localStorage.setItem("access_token", res.token);
          localStorage.setItem("user_id", res.user._id);
          this.router.navigate(["admin/clients"]);
        } else {
          localStorage.removeItem("access_token");
          localStorage.removeItem("user_id");
          this.error = "Accès résérvé aux administrateurs du site.";
        }
      },
      (err) => {
        this.error = err.error.details[0];
        localStorage.removeItem("access_token");
        localStorage.removeItem("user_id");
      }
    );
  }
}
