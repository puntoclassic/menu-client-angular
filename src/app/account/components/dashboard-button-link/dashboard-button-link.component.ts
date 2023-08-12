import { Component, HostBinding, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-dashboard-button-link",
  templateUrl: "./dashboard-button-link.component.html",
  styleUrls: ["./dashboard-button-link.component.scss"],
})
export class DashboardButtonLinkComponent implements OnInit {
  @HostBinding("class")
  classes =
    "w-full md:w-1/2 lg:w-1/6 bg-slate-50 lg:max-w-xs hover:bg-slate-500  hover:text-white border-b-red-900  border-b-8 text-red-900";

  @Input()
  link: string;

  @Input()
  title: string;

  constructor() {}

  ngOnInit(): void {
  }
}
