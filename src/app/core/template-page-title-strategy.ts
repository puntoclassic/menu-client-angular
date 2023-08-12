import { Inject, Injectable } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { RouterStateSnapshot, TitleStrategy } from "@angular/router";
import { SettingsService } from "src/app/amministrazione/services/setting.service";

@Injectable({ providedIn: "root" })
export class TemplatePageTitleStrategy extends TitleStrategy {
  constructor(
    private readonly title: Title,
    private settingService: SettingsService,
  ) {
    super();
  }

  override updateTitle(routerState: RouterStateSnapshot) {
    const title = this.buildTitle(routerState);
    if (title !== undefined) {
      this.settingService.settings.subscribe((settings: any) => {
        if (settings) {
          this.title.setTitle(
            `${title} :: ${settings.siteName}`,
          );
        }
      });
    }
  }
}
