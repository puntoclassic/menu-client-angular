import { Component, Input, OnInit } from "@angular/core";
import { GetUserOrdersItem } from "src/app/amministrazione/types";

@Component({
  selector: "app-my-order-card",
  templateUrl: "./my-order-card.component.html",
  styleUrls: ["./my-order-card.component.scss"],
})
export class MyOrderCardComponent implements OnInit {
  orderLink = "";

  @Input()
  order: GetUserOrdersItem;

  constructor() {}

  ngOnInit(): void {
    this.orderLink = `/account/i-miei-ordini/${this.order.id}`;
  }
}
