import { HttpClientModule } from "@angular/common/http";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { AdminSearchFormComponent } from "src/app/amministrazione/components/admin-search-form/admin-search-form.component";
import { PaginatorComponent } from "src/app/amministrazione/components/paginator/paginator.component";
import { PerPageSelectorComponent } from "src/app/amministrazione/components/per-page-selector/per-page-selector.component";
import { OrderStateRowComponent } from "src/app/amministrazione/pages/orderState/components/order-state-row/order-state-row.component";
import { SharedModule } from "src/app/shared/shared.module";
import { fakeAdminAccountData } from "src/app/test/fakeAdminAccountData";
import { fakeAppData } from "src/app/test/fakeAppData";
import { fakeEmptyCartData } from "src/app/test/fakeEmptyCartData";
import { fakeOrderStatesData } from "src/app/test/fakeOrderStatesData";
import { fakeSettingsData } from "src/app/test/fakeSettingsData";

import { OrderStateListPageComponent } from "./order-state-list-page.component";

describe("OrderStateListPageComponent", () => {
  let component: OrderStateListPageComponent;
  let fixture: ComponentFixture<OrderStateListPageComponent>;

  beforeEach(async () => {
    fakeAdminAccountData();

    fakeEmptyCartData();
    fakeSettingsData();
    fakeOrderStatesData();
    await TestBed.configureTestingModule({
      imports: [
        SharedModule,
        RouterTestingModule.withRoutes([]),
      ],
      declarations: [
        OrderStateListPageComponent,
        OrderStateRowComponent,
        AdminSearchFormComponent,
        PerPageSelectorComponent,
        PaginatorComponent,
      ],
    })
      .compileComponents();

    fixture = TestBed.createComponent(OrderStateListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
