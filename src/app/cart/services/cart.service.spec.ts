import { HttpClientModule } from "@angular/common/http";
import { TestBed } from "@angular/core/testing";
import { SharedModule } from "src/app/shared/shared.module";
import { fakeAdminAccountData } from "src/app/test/fakeAdminAccountData";
import { fakeEmptyCartData } from "src/app/test/fakeEmptyCartData";

import { CartService } from "./cart.service";

describe("CartService", () => {
  let service: CartService;

  beforeEach(() => {
    fakeAdminAccountData();
    fakeEmptyCartData();

    TestBed.configureTestingModule({
      imports: [
        SharedModule,
      ],
    });
    service = TestBed.inject(CartService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
