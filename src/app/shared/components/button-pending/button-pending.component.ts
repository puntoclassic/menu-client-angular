import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-button-pending",
  templateUrl: "./button-pending.component.html",
  styleUrls: ["./button-pending.component.scss"],
})
export class ButtonPendingComponent implements OnInit {
  @Input()
  isPending: boolean = false;

  constructor() {}

  ngOnInit(): void {
  }
}
