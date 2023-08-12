import { HttpClientModule } from "@angular/common/http";
import { TestBed } from "@angular/core/testing";
import { SettingsService } from "src/app/amministrazione/services/setting.service";
import { SharedModule } from "src/app/shared/shared.module";
import { fakeEmptyCartData } from "src/app/test/fakeEmptyCartData";
import { fakeSettingsData } from "src/app/test/fakeSettingsData";

describe("SettingService", () => {
  let service: SettingsService;

  beforeEach(() => {
    fakeSettingsData();
    fakeEmptyCartData();
    TestBed.configureTestingModule({
      imports: [SharedModule],
    });
    service = TestBed.inject(SettingsService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
