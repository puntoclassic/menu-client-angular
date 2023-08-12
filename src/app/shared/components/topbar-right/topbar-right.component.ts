import { Component, HostBinding, OnInit } from "@angular/core";

@Component({
  selector: "app-topbar-right",
  templateUrl: "./topbar-right.component.html",
  styleUrls: ["./topbar-right.component.scss"],
})
export class TopbarRightComponent implements OnInit {
  @HostBinding("class")
  classes = "w-full md:w-1/4 flex flex-row p-2 justify-center md:justify-end";

  constructor() {}

  ngOnInit(): void {
  }
}
