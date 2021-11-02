import { Component } from '@angular/core';
import { MailerServiceService } from 'src/app/services/mailer-service.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
})
export class ModalComponent {
  email: string = ""
  constructor(private mailerService: MailerServiceService) {}
  showModal = false;
  toggleModal(){
    this.showModal = !this.showModal;
  }
  sendMail() {  
    this.mailerService.sendMail(this.email).subscribe((res) => {
      console.log(res);
      this.email = '';
      this.toggleModal()
    });
  }
}