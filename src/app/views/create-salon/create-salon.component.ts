import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { AuthService } from "src/app/services/auth.service";
import { ManageSalonsService } from "src/app/services/manage-salons.service";

@Component({
  selector: "app-create-salon",
  templateUrl: "./create-salon.component.html",
})
export class CreateSalonComponent implements OnInit {
  success: string | null = null;
  selectedFile: File;
  profileImagePath: string = "";
  salonImagePath: string = "";
  uploaded: string = "";
  access_token: string = "";
  profileForm = new FormGroup({
    first_name: new FormControl(""),
    last_name: new FormControl(""),
    email: new FormControl(""),
    password: new FormControl(""),
    name: new FormControl(""),
  });
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private manageSalons: ManageSalonsService,
    private authService: AuthService
  ) {
    this.route.queryParams.subscribe((params) => {
      this.access_token = params.access_token;
      if (!this.access_token) {
        this.router.navigate(["/error-404"]);
      }
      this.authService
        .verifyToken(this.access_token)
        .subscribe((response: any) => {
          if (response.error) {
            this.router.navigate(["/error-404"]);
          }
        });
    });
  }
  onProfileImageChanged(event) {
    this.selectedFile = event.target.files[0];
    const uploadData = new FormData();
    uploadData.append(
      "profile-photo",
      this.selectedFile,
      this.selectedFile.name
    );
    this.manageSalons.sendImage(uploadData).subscribe((response: any) => {
      this.profileImagePath = response.url;
      this.uploaded = "image uploaded";
    });
  }
  onSalonImageChanged(event) {
    this.selectedFile = event.target.files[0];
    const uploadData = new FormData();
    uploadData.append(
      "profile-photo",
      this.selectedFile,
      this.selectedFile.name + this.selectedFile.type
    );
    this.manageSalons.sendImage(uploadData).subscribe((response: any) => {
      this.salonImagePath = response.url;
    });
  }
  onSubmit() {
    const manager = {
      first_name: this.profileForm.value.first_name,
      last_name: this.profileForm.value.last_name,
      email: this.profileForm.value.email,
      password: this.profileForm.value.password,
      role: "Manager",
      salon: "",
    };
    const salon = {
      name: this.profileForm.value.name,
      image: this.salonImagePath,
    };
    this.manageSalons.createSalon(salon).subscribe((response: any) => {
      manager.salon = response?._id;
      this.manageSalons.createManager(manager).subscribe((response: any) => {
        if (response.user) {
          this.success =
            "Your account has been created you will be redirected shortly";
        }
      });
    });
  }
  ngOnInit(): void {}
}
