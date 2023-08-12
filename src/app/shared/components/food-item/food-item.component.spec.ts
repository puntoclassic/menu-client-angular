import { ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { AddToCartButtonComponent } from "src/app/shared/components/add-to-cart-button/add-to-cart-button.component";
import { PriceOutputPipe } from "src/app/shared/pipes/price-output.pipe";
import { SharedModule } from "src/app/shared/shared.module";
import { fakeAppData } from "src/app/test/fakeAppData";
import { fakeCustomerAccountData } from "src/app/test/fakeCustomerAccountData";
import { fakeEmptyCartData } from "src/app/test/fakeEmptyCartData";
import { fakeSettingsData } from "src/app/test/fakeSettingsData";

import { FoodItemComponent } from "./food-item.component";

describe("FoodItemComponent", () => {
  let component: FoodItemComponent;
  let fixture: ComponentFixture<FoodItemComponent>;

  beforeEach(async () => {
    fakeCustomerAccountData();

    fakeEmptyCartData();
    fakeSettingsData();

    await TestBed.configureTestingModule({
      imports: [
        SharedModule,
        RouterTestingModule.withRoutes([]),
      ],
      declarations: [
        FoodItemComponent,
        PriceOutputPipe,
        AddToCartButtonComponent,
      ],
    })
      .compileComponents();

    fixture = TestBed.createComponent(FoodItemComponent);
    component = fixture.componentInstance;
    component.item = {
      price: 4,
    };
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
