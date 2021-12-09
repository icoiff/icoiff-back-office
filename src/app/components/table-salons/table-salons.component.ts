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
  constructor(private manageSalons: ManageSalonsService) {
    this.manageSalons.getSalons().subscribe((res) => {
      this.salons = res;
    });
  }

  ngOnInit(): void {}
}
