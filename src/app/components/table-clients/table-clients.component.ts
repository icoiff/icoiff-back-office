import { Component, Input, OnInit } from '@angular/core';
import { ManageClientsService } from 'src/app/services/manage-clients.service';

@Component({
  selector: 'app-table-clients',
  templateUrl: './table-clients.component.html'
})
export class TableClientsComponent implements OnInit {

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

  constructor(private manageClientsService:ManageClientsService) {
    this.manageClientsService.getClients().subscribe((res)=> this.clients = res);
  }

  ngOnInit(): void {}

}
