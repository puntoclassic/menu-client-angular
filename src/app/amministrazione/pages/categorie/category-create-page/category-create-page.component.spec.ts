import { HttpClientModule } from "@angular/common/http";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";
import { SharedModule } from "src/app/shared/shared.module";
import { fakeAdminAccountData } from "src/app/test/fakeAdminAccountData";
import { fakeAppData } from "src/app/test/fakeAppData";
import { fakeCategoryData } from "src/app/test/fakeCategoryData";
import { fakeEmptyCartData } from "src/app/test/fakeEmptyCartData";
import { fakeSettingsData } from "src/app/test/fakeSettingsData";

import { CategoryCreatePageComponent } from "./category-create-page.component";

describe("CategoryCreatePageComponent", () => {
  let component: CategoryCreatePageComponent;
  let fixture: ComponentFixture<CategoryCreatePageComponent>;

  beforeEach(async () => {
    fakeAdminAccountData();
    fakeCategoryData();
    fakeEmptyCartData();
    fakeSettingsData();
    await TestBed.configureTestingModule({
      imports: [
        SharedModule,

        RouterTestingModule.withRoutes([]),
      ],
      declarations: [CategoryCreatePageComponent],
    })
      .compileComponents();

    fixture = TestBed.createComponent(CategoryCreatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
