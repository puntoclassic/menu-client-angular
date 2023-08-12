import { HttpClientModule } from "@angular/common/http";
import { TestBed } from "@angular/core/testing";
import { SharedModule } from "src/app/shared/shared.module";
import { fakeAppData } from "src/app/test/fakeAppData";
import { fakeEmptyCartData } from "src/app/test/fakeEmptyCartData";
import { fakeGuestAccountData } from "src/app/test/fakeGuestAccountData";
import { fakeSettingsData } from "src/app/test/fakeSettingsData";

import { CartFilledGuard } from "./cart-filled.guard";

describe("CartFilledGuard", () => {
  let guard: CartFilledGuard;

  beforeEach(() => {
    fakeGuestAccountData();

    fakeEmptyCartData();
    fakeSettingsData();

    TestBed.configureTestingModule({
      imports: [
        SharedModule,
      ],
    });
    guard = TestBed.inject(CartFilledGuard);
  });

  it("should be created", () => {
    expect(guard).toBeTruthy();
  });
});
