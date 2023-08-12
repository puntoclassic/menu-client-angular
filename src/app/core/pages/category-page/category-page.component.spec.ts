import { HttpClientModule } from "@angular/common/http";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { BrowserModule } from "@angular/platform-browser";
import { ActivatedRoute } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";
import { of } from "rxjs";
import { CategoryPillsComponent } from "src/app/shared/components/category-pills/category-pills.component";
import { FoodItemComponent } from "src/app/shared/components/food-item/food-item.component";
import { SharedModule } from "src/app/shared/shared.module";
import { fakeAppData } from "src/app/test/fakeAppData";
import { fakeCategoryData } from "src/app/test/fakeCategoryData";
import { fakeCustomerAccountData } from "src/app/test/fakeCustomerAccountData";
import { fakeEmptyCartData } from "src/app/test/fakeEmptyCartData";
import { fakeFoodData } from "src/app/test/fakeFoodData";
import { fakeSettingsData } from "src/app/test/fakeSettingsData";

import { CategoryPageComponent } from "./category-page.component";

describe("CategoryPageComponent", () => {
  let component: CategoryPageComponent;
  let fixture: ComponentFixture<CategoryPageComponent>;

  beforeEach(async () => {
    fakeCategoryData();
    fakeFoodData();
    fakeCustomerAccountData();

    fakeEmptyCartData();
    fakeSettingsData();

    await TestBed.configureTestingModule({
      declarations: [
        CategoryPageComponent,
        FoodItemComponent,
        CategoryPillsComponent,
      ],
      imports: [
        SharedModule,
        RouterTestingModule.withRoutes([]),
      ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({
              slug: "pizze",
            }),
            queryParams: of({
              key: "pom",
            }),
          },
        },
      ],
    })
      .compileComponents();

    fixture = TestBed.createComponent(CategoryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
