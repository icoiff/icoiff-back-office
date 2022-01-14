import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-card-stats",
  templateUrl: "./card-stats.component.html",
})
export class CardStatsComponent implements OnInit {
  @Input() title: string;
  @Input() data: string;
  @Input() color: string;
  @Input() icon: string;
  @Input() image: string;
  constructor() {}

  ngOnInit(): void {}
}
