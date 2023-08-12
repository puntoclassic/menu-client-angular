import { HttpClientModule } from "@angular/common/http";
import { TestBed } from "@angular/core/testing";
import { SharedModule } from "src/app/shared/shared.module";
import { fakeAppData } from "src/app/test/fakeAppData";
import { fakeEmptyCartData } from "src/app/test/fakeEmptyCartData";
import { fakeCustomerAccountData } from "src/app/test/fakeCustomerAccountData";
import { fakeSettingsData } from "src/app/test/fakeSettingsData";

import { LoginRequiredGuard } from "./login-required.guard";
import { fakeCategoryData } from "src/app/test/fakeCategoryData";

describe("LoginRequiredGuard", () => {
  let guard: LoginRequiredGuard;

  beforeEach(() => {
    fakeSettingsData();
    fakeCustomerAccountData();
    TestBed.configureTestingModule({
      imports: [
        SharedModule,
      ],
    });
    guard = TestBed.inject(LoginRequiredGuard);
  });

  it("should be created", () => {
    expect(guard).toBeTruthy();
  });
});
