import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, map, Observable, ReplaySubject } from "rxjs";
import { SettingFields } from "src/app/amministrazione/types";

@Injectable({
  providedIn: "root",
})
export class SettingsService {
  settings = new ReplaySubject<SettingFields>(1);

  constructor(
    private http: HttpClient,
  ) {
    this.fetchSettings();
  }

  fetchSettings() {
    this.getSettings().subscribe((data) => {
      this.settings.next(data as SettingFields);
    });
  }

  getSettings() {
    return this.http.get<SettingFields>("Api/Setting/GetAll");
  }

  pushSettings(data: SettingFields) {
    return this.http.post("Api/Setting/PostUpdatedSettings", data);
  }
}
