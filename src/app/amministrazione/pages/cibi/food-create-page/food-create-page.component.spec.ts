import { HttpClientModule } from "@angular/common/http";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FormBuilder, ReactiveFormsModule } from "@angular/forms";
import { RouterTestingModule } from "@angular/router/testing";
import { SharedModule } from "src/app/shared/shared.module";
import { fakeAdminAccountData } from "src/app/test/fakeAdminAccountData";
import { fakeCategoryData } from "src/app/test/fakeCategoryData";
import { fakeEmptyCartData } from "src/app/test/fakeEmptyCartData";
import { fakeSettingsData } from "src/app/test/fakeSettingsData";

import { FoodCreatePageComponent } from "./food-create-page.component";

describe("FoodCreatePageComponent", () => {
  let component: FoodCreatePageComponent;
  let fixture: ComponentFixture<FoodCreatePageComponent>;

  beforeEach(async () => {
    fakeEmptyCartData();
    fakeAdminAccountData();
    fakeSettingsData();
    fakeCategoryData();

    await TestBed.configureTestingModule({
      imports: [
        SharedModule,
        RouterTestingModule.withRoutes([]),
      ],
      declarations: [FoodCreatePageComponent],
    })
      .compileComponents();

    fixture = TestBed.createComponent(FoodCreatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
