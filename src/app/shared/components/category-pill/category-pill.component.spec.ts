import { ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { SharedModule } from "src/app/shared/shared.module";
import { fakeAppData } from "src/app/test/fakeAppData";
import { fakeCustomerAccountData } from "src/app/test/fakeCustomerAccountData";
import { fakeEmptyCartData } from "src/app/test/fakeEmptyCartData";
import { fakeSettingsData } from "src/app/test/fakeSettingsData";

import { CategoryPillComponent } from "./category-pill.component";

describe("CategoryPillComponent", () => {
  let component: CategoryPillComponent;
  let fixture: ComponentFixture<CategoryPillComponent>;

  beforeEach(async () => {
    fakeCustomerAccountData();

    fakeEmptyCartData();
    fakeSettingsData();
    await TestBed.configureTestingModule({
      imports: [
        SharedModule,
        RouterTestingModule.withRoutes([]),
      ],
      declarations: [CategoryPillComponent],
    })
      .compileComponents();

    fixture = TestBed.createComponent(CategoryPillComponent);
    component = fixture.componentInstance;
    component.item = {
      id: 1,
      name: "test",
      slug: "test",
    };
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
