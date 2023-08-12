import { HttpClient, HttpClientModule } from "@angular/common/http";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { SharedModule } from "src/app/shared/shared.module";
import { fakeAppData } from "src/app/test/fakeAppData";
import { fakeCategoryData } from "src/app/test/fakeCategoryData";
import { fakeCustomerAccountData } from "src/app/test/fakeCustomerAccountData";
import { fakeEmptyCartData } from "src/app/test/fakeEmptyCartData";
import { fakeSettingsData } from "src/app/test/fakeSettingsData";

import { CategoryPillsComponent } from "./category-pills.component";

describe("CategoryPillsComponent", () => {
  let component: CategoryPillsComponent;
  let fixture: ComponentFixture<CategoryPillsComponent>;

  beforeEach(async () => {
    fakeCustomerAccountData();

    fakeCategoryData();
    fakeEmptyCartData();
    fakeSettingsData();
    await TestBed.configureTestingModule({
      declarations: [CategoryPillsComponent],
      imports: [
        SharedModule,
        RouterTestingModule.withRoutes([]),
      ],
    })
      .compileComponents();

    fixture = TestBed.createComponent(CategoryPillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
