import { HttpClientModule } from "@angular/common/http";
import { TestBed } from "@angular/core/testing";
import { SharedModule } from "src/app/shared/shared.module";

import { OrderStateService } from "./order-state.service";

describe("OrderStateService", () => {
  let service: OrderStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        SharedModule,
      ],
    });
    service = TestBed.inject(OrderStateService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
