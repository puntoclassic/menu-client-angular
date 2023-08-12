import { Component, HostBinding, OnInit } from "@angular/core";

@Component({
  selector: "app-topbar-left",
  templateUrl: "./topbar-left.component.html",
  styleUrls: ["./topbar-left.component.scss"],
})
export class TopbarLeftComponent implements OnInit {
  @HostBinding("class")
  classes = "w-full md:w-3/4 flex p-2 justify-center md:justify-start";

  constructor() {}

  ngOnInit(): void {
  }
}
