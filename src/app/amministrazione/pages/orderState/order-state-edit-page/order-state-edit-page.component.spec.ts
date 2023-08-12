import { HttpClientModule } from "@angular/common/http";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ReactiveFormsModule } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";
import { of } from "rxjs";
import { SharedModule } from "src/app/shared/shared.module";
import { fakeAdminAccountData } from "src/app/test/fakeAdminAccountData";
import { fakeAppData } from "src/app/test/fakeAppData";
import { fakeCategoryData } from "src/app/test/fakeCategoryData";
import { fakeEmptyCartData } from "src/app/test/fakeEmptyCartData";
import { fakeOrderStatesData } from "src/app/test/fakeOrderStatesData";
import { fakeSettingsData } from "src/app/test/fakeSettingsData";

import { OrderStateEditPageComponent } from "./order-state-edit-page.component";

describe("OrderStateEditPageComponent", () => {
  let component: OrderStateEditPageComponent;
  let fixture: ComponentFixture<OrderStateEditPageComponent>;

  beforeEach(async () => {
    fakeAdminAccountData();

    fakeCategoryData();
    fakeEmptyCartData();
    fakeSettingsData();
    fakeOrderStatesData();

    await TestBed.configureTestingModule({
      imports: [
        SharedModule,
        RouterTestingModule.withRoutes([]),
      ],
      providers: [{
        provide: ActivatedRoute,
        useValue: {
          params: of({
            id: 1,
          }),
        },
      }],
      declarations: [OrderStateEditPageComponent],
    })
      .compileComponents();

    fixture = TestBed.createComponent(OrderStateEditPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
