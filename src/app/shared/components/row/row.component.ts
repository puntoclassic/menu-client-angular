import { Component, HostBinding, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-row",
  templateUrl: "./row.component.html",
  styleUrls: ["./row.component.scss"],
})
export class RowComponent implements OnInit {
  @HostBinding("class")
  classes: string = "row g-0";

  ngOnInit(): void {
  }
}
