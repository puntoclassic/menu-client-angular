import { HttpClientModule } from "@angular/common/http";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { SettingsService } from "src/app/amministrazione/services/setting.service";
import { SettingFields } from "src/app/amministrazione/types";
import { SharedModule } from "src/app/shared/shared.module";
import { fakeAdminAccountData } from "src/app/test/fakeAdminAccountData";
import { fakeAppData } from "src/app/test/fakeAppData";
import { fakeCustomerAccountData } from "src/app/test/fakeCustomerAccountData";
import { fakeEmptyCartData } from "src/app/test/fakeEmptyCartData";
import { fakeSettingsData } from "src/app/test/fakeSettingsData";

import { HeaderComponent } from "./header.component";

describe("HeaderComponent", () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let settingsService: SettingsService;

  beforeEach(async () => {
    fakeCustomerAccountData();

    fakeEmptyCartData();
    fakeSettingsData();

    await TestBed.configureTestingModule({
      imports: [
        SharedModule,
        RouterTestingModule.withRoutes([]),
      ],
      declarations: [HeaderComponent],
    })
      .compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    settingsService = TestBed.inject(SettingsService);

    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("header title correct", () => {
    settingsService.settings.subscribe((values: SettingFields) => {
      expect(component.siteName).toBe(values.siteName);
    });
  });

  it("header subtitle correct", () => {
    settingsService.settings.subscribe((values: SettingFields) => {
      expect(component.siteSubTitle).toBe(values.siteSubtitle);
    });
  });
});
