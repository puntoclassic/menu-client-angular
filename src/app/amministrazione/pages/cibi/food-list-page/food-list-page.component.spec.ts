import { HttpClientModule } from "@angular/common/http";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { AdminSearchFormComponent } from "src/app/amministrazione/components/admin-search-form/admin-search-form.component";
import { PaginatorComponent } from "src/app/amministrazione/components/paginator/paginator.component";
import { PerPageSelectorComponent } from "src/app/amministrazione/components/per-page-selector/per-page-selector.component";
import { FoodRowComponent } from "src/app/amministrazione/pages/cibi/components/food-row/food-row.component";
import { SharedModule } from "src/app/shared/shared.module";
import { fakeAdminAccountData } from "src/app/test/fakeAdminAccountData";
import { fakeAppData } from "src/app/test/fakeAppData";
import { fakeEmptyCartData } from "src/app/test/fakeEmptyCartData";
import { fakeFoodData } from "src/app/test/fakeFoodData";
import { fakeSettingsData } from "src/app/test/fakeSettingsData";

import { FoodListPageComponent } from "./food-list-page.component";

describe("FoodListPageComponent", () => {
  let component: FoodListPageComponent;
  let fixture: ComponentFixture<FoodListPageComponent>;

  beforeEach(async () => {
    fakeAdminAccountData();

    fakeEmptyCartData();
    fakeSettingsData();
    fakeFoodData();
    await TestBed.configureTestingModule({
      imports: [
        SharedModule,
        RouterTestingModule.withRoutes([]),
      ],
      declarations: [
        FoodListPageComponent,
        FoodRowComponent,
        AdminSearchFormComponent,
        PerPageSelectorComponent,
        PaginatorComponent,
      ],
    })
      .compileComponents();

    fixture = TestBed.createComponent(FoodListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
