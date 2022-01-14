import { Component, Input, OnInit } from "@angular/core";
import { ManageSalonsService } from "src/app/services/manage-salons.service";

@Component({
  selector: "app-table-salons",
  templateUrl: "./table-salons.component.html",
})
export class TableSalonsComponent implements OnInit {
  @Input()
  get color(): string {
    return this._color;
  }
  set color(color: string) {
    this._color = color !== "light" && color !== "dark" ? "light" : color;
  }
  private _color = "light";
  salons: Array<any>;
  live: boolean = true;
  edit: boolean = false;
  salon: any = null;
  constructor(private manageSalons: ManageSalonsService) {
    this.manageSalons.getSalons().subscribe((res) => {
      this.salons = res;
    });
  }

  ngOnInit(): void {}

  toggleActivation(selectedSalon) {
    this.manageSalons
      .toggleActivation(selectedSalon)
      .subscribe((updatedSalon) => {
        this.salons = this.salons.map((salon, index) =>
          salon._id === updatedSalon._id
            ? {
                ...salon,
                isActive: updatedSalon.isActive,
              }
            : salon
        );
      });
  }

  showEditModal(salon) {
    this.edit = true;
    this.salon = salon;
  }
}
