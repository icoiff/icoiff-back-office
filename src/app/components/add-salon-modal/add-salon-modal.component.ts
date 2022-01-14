import { Component } from '@angular/core';
import { MailerServiceService } from 'src/app/services/mailer-service.service';

@Component({
  selector: 'app-add-salon-modal',
  templateUrl: './add-salon-modal.component.html',
})
export class AddSalonModalComponent {
  email: string = ""
  constructor(private mailerService: MailerServiceService) {}
  showModal = false;
  toggleModal(){
    this.showModal = !this.showModal;
  }
  sendRegistrationMail() {
    this.mailerService.sendRegistrationMail(this.email).subscribe((res) => {

      this.email = '';
      this.toggleModal()
    });
  }
}