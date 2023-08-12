import { Component, HostBinding, OnInit } from "@angular/core";

@Component({
  selector: "app-topbar",
  templateUrl: "./topbar.component.html",
  styleUrls: ["./topbar.component.scss"],
})
export class TopbarComponent implements OnInit {
  @HostBinding("class")
  classes = "w-full bg-red-900 flex flex-col md:flex-row p-1";
  constructor() {}

  ngOnInit(): void {
  }
}
