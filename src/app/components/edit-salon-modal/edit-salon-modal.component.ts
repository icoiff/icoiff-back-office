import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { MailerServiceService } from "src/app/services/mailer-service.service";
import { ManageSalonsService } from "src/app/services/manage-salons.service";

@Component({
  selector: "app-edit-salon-modal",
  templateUrl: "./edit-salon-modal.component.html",
})
export class EditSalonModalComponent implements OnInit {
  @Input() edit: boolean;
  @Output() editChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() salon: any;
  @Input() salons: Array<any>;
  @Output() salonsChange: EventEmitter<Array<any>> = new EventEmitter<
    Array<any>
  >();

  name: string = "";
  image: string = "";
  selectedFile: File;
  loading = false;
  uploaded = "";
  constructor(private manageSalonService: ManageSalonsService) {}
  ngOnInit(): void {
    this.name = this.salon.name;
    this.image = this.salon.image;
  }
  toggleModal() {
    this.edit = !this.edit;
    this.editChange.emit(this.edit);
  }
  onImageChanged(event) {
    this.loading = true;
    this.uploaded = "Uploading...";
    this.selectedFile = event.target.files[0];
    const uploadData = new FormData();
    uploadData.append(
      "profile-photo",
      this.selectedFile,
      this.selectedFile.name
    );
    this.manageSalonService.sendImage(uploadData).subscribe((response: any) => {
      this.image = response.url;
      this.loading = false;
      this.uploaded = "image uploaded";
    });
  }
  sendRegistrationMail() {
    this.manageSalonService
      .editSalon({
        _id: this.salon._id,
        name: this.name,
        image: this.image,
      })
      .subscribe((res) => {
        this.salons = this.salons.map((salon) =>
          salon._id !== this.salon._id
            ? salon
            : { ...this.salon, name: this.name, image: this.image }
        );
        this.salonsChange.emit(this.salons);
        this.toggleModal();
      });
  }
}
