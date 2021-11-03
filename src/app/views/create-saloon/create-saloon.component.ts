import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ManageSaloonsService } from 'src/app/services/manage-saloons.service';

@Component({
  selector: 'app-create-saloon',
  templateUrl: './create-saloon.component.html',
})
export class CreateSaloonComponent implements OnInit {
  selectedFile: File;
  profileImagePath: string = '';
  saloonImagePath: string = '';
  uploaded: string = ''
  access_token: string= '';
  profileForm = new FormGroup({
    first_name: new FormControl(''),
    last_name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    name: new FormControl(''),
  });
  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private manageSaloons: ManageSaloonsService
  ) {
    this.access_token = this.route.snapshot.params.access_token;
    // if (!this.access_token) {
    //   this.router.navigate(['/error-404'])
    // }
  }
  onProfileImageChanged(event) {
    this.selectedFile = event.target.files[0];
    const uploadData = new FormData();
    uploadData.append('profile-photo', this.selectedFile, this.selectedFile.name + this.selectedFile.type);
    this.manageSaloons.sendImage(uploadData).subscribe(
      (response: any)=>{
        this.profileImagePath = `uploads/${response?.body?.filename}`;
        this.uploaded = 'image uploaded'
      }
    );
  }
  onSaloonImageChanged(event) {
    this.selectedFile = event.target.files[0];
    const uploadData = new FormData();
    uploadData.append('profile-photo', this.selectedFile, this.selectedFile.name + this.selectedFile.type);
    this.manageSaloons.sendImage(uploadData).subscribe(
      (response: any)=>{
        this.saloonImagePath = `uploads/${response?.body?.filename}`;
        this.uploaded = 'image uploaded'
      }
    );
  }
  onSubmit() {
    const manager = {
      first_name: this.profileForm.value.first_name,
      last_name: this.profileForm.value.last_name,
      email: this.profileForm.value.email,
      password: this.profileForm.value.password,
      role: 'Manager',
      salon: ''
    };
    const salon = {
      name: this.profileForm.value.name,
      image: this.saloonImagePath
    }
    this.manageSaloons.createSaloon(salon).subscribe((response: any) => {
      manager.salon = response?._id
      this.manageSaloons.createManager(manager).subscribe((response) => {
        console.log(response);
      })
    })
  }
  ngOnInit(): void {
  }

}
