import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { AuthService } from "src/app/services/auth.service";
import { ManageSalonsService } from "src/app/services/manage-salons.service";

@Component({
  selector: "app-reset-password-form",
  templateUrl: "./reset-password-form.component.html",
})
export class ResetPasswordFormComponent implements OnInit {
  passwordForm: FormGroup;
  access_token: string = "";
  user: any = null;
  success: boolean = false;
  show: boolean = false;
  message = "";
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public fb: FormBuilder,
    private authService: AuthService
  ) {
    this.passwordForm = this.fb.group({
      password: [""],
      confirmPassword: [""],
    });
    this.route.queryParams.subscribe((params) => {
      this.access_token = params.access_token;
      if (!this.access_token) {
        this.router.navigate(["/error-404"]);
      }
      this.authService.verifyToken(this.access_token).subscribe(
        (response: any) => {
          if (response.error) {
            this.router.navigate(["/error-404"]);
          } else {
            this.user = response;
          }
        },
        (err) => {
          this.router.navigate(["/error-404"]);
        }
      );
    });
  }

  submit() {
    const { password, confirmPassword } = this.passwordForm.value;
    if (password === confirmPassword) {
      this.authService
        .resetPassword({
          email: this.user.email,
          password,
        })
        .subscribe(
          (res) => {
            this.success = true;
            this.message = "Mot de passe changé";
            this.show = true;
          },
          (err) => {
            // if (err.error.)
            this.success = false;
            if (err.error.statusCode === 400) {
              this.message =
                "Le mot de passe doit contenir au moins 4 caractères.";
            } else {
              this.message = "Une erreur est survenue. Prière de réessayer";
            }
            this.show = true;
          }
        );
    } else {
      this.success = false;
      this.message = "Les deux mots de passes saisis ne corréspondent pas";
      this.show = true;
    }
  }
  ngOnInit(): void {}
}
