import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { MailerServiceService } from "src/app/services/mailer-service.service";

@Component({
  selector: "app-reset-password",
  templateUrl: "./reset-password.component.html",
})
export class ResetPasswordComponent implements OnInit {
  passwordForm: FormGroup;
  message = "";
  show: boolean = false;
  success: boolean = false;
  constructor(
    public fb: FormBuilder,
    public mailerService: MailerServiceService,
    public router: Router
  ) {
    this.passwordForm = this.fb.group({
      email: [""],
    });
  }

  ngOnInit() {}

  sendResetPasswordMail() {
    this.mailerService
      .sendResetPasswordMail(this.passwordForm.value.email)
      .subscribe((res) => {
        if (res.accepted.length) {
          this.success = true;
          this.message =
            "Prière de consulter votre boite mail. Si le mail ne figure pas dans votre boite principale, prière de consulter les autre boites de réception (Notifications, Spam...)";
          this.show = true;
        } else {
          this.success = false;
          this.message = "Une erreur est survenue. Veuillez réessayer";
          this.show = true;
        }
      });
  }
}
