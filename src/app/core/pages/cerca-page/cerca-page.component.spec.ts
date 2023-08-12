import { HttpClientModule } from "@angular/common/http";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ActivatedRoute } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";
import { of } from "rxjs";
import { routes } from "src/app/core/core.module";
import { CategoryPillsComponent } from "src/app/shared/components/category-pills/category-pills.component";
import { FoodItemComponent } from "src/app/shared/components/food-item/food-item.component";
import { SharedModule } from "src/app/shared/shared.module";
import { fakeCategoryData } from "src/app/test/fakeCategoryData";
import { fakeCustomerAccountData } from "src/app/test/fakeCustomerAccountData";
import { fakeEmptyCartData } from "src/app/test/fakeEmptyCartData";
import { fakeFoodData } from "src/app/test/fakeFoodData";
import { fakeSettingsData } from "src/app/test/fakeSettingsData";

import { CercaPageComponent } from "./cerca-page.component";

describe("CercaPageComponent", () => {
  let component: CercaPageComponent;
  let fixture: ComponentFixture<CercaPageComponent>;

  beforeEach(async () => {
    fakeCustomerAccountData();

    fakeCategoryData();
    fakeFoodData();
    fakeEmptyCartData();
    fakeSettingsData();

    await TestBed.configureTestingModule({
      imports: [
        SharedModule,

        RouterTestingModule.withRoutes(routes),
      ],
      declarations: [
        CercaPageComponent,
        CategoryPillsComponent,
        FoodItemComponent,
      ],
      providers: [{
        provide: ActivatedRoute,
        useValue: {
          queryParams: of({
            key: "test",
            search: "test",
          }),
        },
      }],
    })
      .compileComponents();

    fixture = TestBed.createComponent(CercaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
