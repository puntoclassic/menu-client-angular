import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-food-item",
  templateUrl: "./food-item.component.html",
  styleUrls: ["./food-item.component.scss"],
})
export class FoodItemComponent implements OnInit {
  @Input()
  item: any;

  @Input()
  category: any;

  priceFormatted: string;

  constructor() {}

  ngOnInit(): void {
    this.priceFormatted = parseFloat(this.item.price).toFixed(2);
  }
}
