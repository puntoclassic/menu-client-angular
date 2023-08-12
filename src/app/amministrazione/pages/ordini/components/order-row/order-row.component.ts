import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "[app-order-row]",
  templateUrl: "./order-row.component.html",
  styleUrls: ["./order-row.component.scss"],
})
export class OrderRowComponent implements OnInit {
  @Input()
  order: any;

  constructor() {}

  ngOnInit(): void {
    console.log(this.order);
  }
}
