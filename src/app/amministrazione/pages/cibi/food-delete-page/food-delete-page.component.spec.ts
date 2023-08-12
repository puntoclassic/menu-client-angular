import { HttpClientModule } from "@angular/common/http";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FormBuilder, ReactiveFormsModule } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";
import { of } from "rxjs";
import { SharedModule } from "src/app/shared/shared.module";
import { fakeAdminAccountData } from "src/app/test/fakeAdminAccountData";
import { fakeAppData } from "src/app/test/fakeAppData";
import { fakeCategoryData } from "src/app/test/fakeCategoryData";
import { fakeEmptyCartData } from "src/app/test/fakeEmptyCartData";
import { fakeFoodData } from "src/app/test/fakeFoodData";
import { fakeSettingsData } from "src/app/test/fakeSettingsData";

import { FoodDeletePageComponent } from "./food-delete-page.component";

describe("FoodDeletePageComponent", () => {
  let component: FoodDeletePageComponent;
  let fixture: ComponentFixture<FoodDeletePageComponent>;

  beforeEach(async () => {
    fakeFoodData();
    fakeCategoryData();
    fakeEmptyCartData();
    fakeAdminAccountData();
    fakeSettingsData();
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
      declarations: [FoodDeletePageComponent],
    })
      .compileComponents();

    fixture = TestBed.createComponent(FoodDeletePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
