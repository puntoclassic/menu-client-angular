import { HttpClientModule } from "@angular/common/http";
import { TestBed } from "@angular/core/testing";
import { SharedModule } from "src/app/shared/shared.module";
import { fakeEmptyCartData } from "src/app/test/fakeEmptyCartData";

import { FoodService } from "./food.service";

describe("FoodService", () => {
  let service: FoodService;

  beforeEach(() => {
    fakeEmptyCartData();
    TestBed.configureTestingModule({
      imports: [
        SharedModule,
      ],
    });
    service = TestBed.inject(FoodService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
