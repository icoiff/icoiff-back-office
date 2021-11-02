import { Component, Input, OnInit } from '@angular/core';
import { ManageSaloonsService } from 'src/app/services/manage-saloons.service';

@Component({
  selector: 'app-table-saloons',
  templateUrl: './table-saloons.component.html',
})
export class TableSaloonsComponent implements OnInit {

  @Input()
  get color(): string {
    return this._color;
  }
  set color(color: string) {
    this._color = color !== "light" && color !== "dark" ? "light" : color;
  }
  private _color = "light";
  saloons: Array<any>;
  live: boolean = true;
  constructor(private manageSaloons: ManageSaloonsService) {
    this.manageSaloons.getSaloons().subscribe((res)=>{this.saloons = res})
  }

  ngOnInit(): void {}

}
