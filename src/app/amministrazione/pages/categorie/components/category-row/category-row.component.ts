import { Component, Input, OnInit, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "[app-category-row]",
  templateUrl: "./category-row.component.html",
  styleUrls: ["./category-row.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class CategoryRowComponent implements OnInit {
  @Input("category")
  category?: any;

  constructor() {
  }

  ngOnInit(): void {
  }
}
