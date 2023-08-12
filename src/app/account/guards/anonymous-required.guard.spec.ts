import { HttpClientModule } from "@angular/common/http";
import { TestBed } from "@angular/core/testing";
import { SharedModule } from "src/app/shared/shared.module";
import { fakeAppData } from "src/app/test/fakeAppData";
import { fakeCategoryData } from "src/app/test/fakeCategoryData";
import { fakeEmptyCartData } from "src/app/test/fakeEmptyCartData";
import { fakeGuestAccountData } from "src/app/test/fakeGuestAccountData";
import { fakeSettingsData } from "src/app/test/fakeSettingsData";

import { AnonymousRequiredGuard } from "./anonymous-required.guard";

describe("AnonymousRequiredGuard", () => {
  let guard: AnonymousRequiredGuard;

  beforeEach(() => {
    fakeSettingsData();
    fakeGuestAccountData();

    TestBed.configureTestingModule({
      imports: [
        SharedModule,
      ],
    });
    guard = TestBed.inject(AnonymousRequiredGuard);
  });

  it("should be created", () => {
    expect(guard).toBeTruthy();
  });
});
