import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "[app-food-row]",
  templateUrl: "./food-row.component.html",
  styleUrls: ["./food-row.component.scss"],
})
export class FoodRowComponent implements OnInit {
  @Input()
  food: any;
  constructor() {}

  ngOnInit(): void {
  }
}
