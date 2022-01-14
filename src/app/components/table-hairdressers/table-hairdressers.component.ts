import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-table-hairdressers",
  templateUrl: "./table-hairdressers.component.html",
})
export class TableHairdressersComponent implements OnInit {
  @Input() hairdressers;
  @Input()
  get color(): string {
    return this._color;
  }
  set color(color: string) {
    this._color = color !== "light" && color !== "dark" ? "light" : color;
  }
  private _color = "light";
  clients: [];
  live: boolean = true;

  constructor() {}

  ngOnInit(): void {}
}
