import { Component, OnInit } from "@angular/core";
import { SettingsService } from "src/app/amministrazione/services/setting.service";
import { MessageService } from "src/app/shared/services/message.service";

@Component({
  selector: "app-loading-page",
  templateUrl: "./loading-page.component.html",
  styleUrls: ["./loading-page.component.scss"],
})
export class LoadingPageComponent implements OnInit {
  settings: any;
  constructor(private settingService: SettingsService) {
  }

  ngOnInit(): void {
    this.settingService.settings.subscribe((data) => {
      this.settings = data;
    });
  }
}
