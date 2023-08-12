import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "[app-order-state-row]",
  templateUrl: "./order-state-row.component.html",
  styleUrls: ["./order-state-row.component.scss"],
})
export class OrderStateRowComponent implements OnInit {
  @Input()
  item: any;

  constructor() {}

  ngOnInit(): void {
  }
}
