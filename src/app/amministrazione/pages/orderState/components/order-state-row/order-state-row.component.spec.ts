import { ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { SharedModule } from "src/app/shared/shared.module";
import { fakeAdminAccountData } from "src/app/test/fakeAdminAccountData";
import { fakeAppData } from "src/app/test/fakeAppData";
import { fakeEmptyCartData } from "src/app/test/fakeEmptyCartData";
import { fakeSettingsData } from "src/app/test/fakeSettingsData";

import { OrderStateRowComponent } from "./order-state-row.component";

describe("OrderStateRowComponent", () => {
  let component: OrderStateRowComponent;
  let fixture: ComponentFixture<OrderStateRowComponent>;

  beforeEach(async () => {
    fakeAdminAccountData();

    fakeEmptyCartData();
    fakeSettingsData();
    await TestBed.configureTestingModule({
      imports: [
        SharedModule,
        RouterTestingModule.withRoutes([]),
      ],
      declarations: [OrderStateRowComponent],
    })
      .compileComponents();

    fixture = TestBed.createComponent(OrderStateRowComponent);
    component = fixture.componentInstance;
    component.item = {
      id: 0,
      name: "test",
      cssBadgeClass: "",
    };
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
