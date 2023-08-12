import { HttpClientModule } from "@angular/common/http";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ReactiveFormsModule } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";
import { of } from "rxjs";
import { BACKEND_URL, SharedModule } from "src/app/shared/shared.module";
import { fakeAdminAccountData } from "src/app/test/fakeAdminAccountData";
import { fakeAppData } from "src/app/test/fakeAppData";
import { fakeCategoryData } from "src/app/test/fakeCategoryData";
import { fakeEmptyCartData } from "src/app/test/fakeEmptyCartData";
import { fakeSettingsData } from "src/app/test/fakeSettingsData";

import { CategoryEditPageComponent } from "./category-edit-page.component";

describe("CategoryEditPageComponent", () => {
  let component: CategoryEditPageComponent;
  let fixture: ComponentFixture<CategoryEditPageComponent>;

  beforeEach(async () => {
    fakeAdminAccountData();

    fakeEmptyCartData();
    fakeSettingsData();
    fakeCategoryData();
    await TestBed.configureTestingModule({
      imports: [
        SharedModule,
        RouterTestingModule.withRoutes([]),
      ],
      providers: [
        {
          provide: BACKEND_URL,
          useValue: "http://localhost:4000",
        },
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({
              id: 1,
            }),
          },
        },
      ],
      declarations: [CategoryEditPageComponent],
    })
      .compileComponents();

    fixture = TestBed.createComponent(CategoryEditPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
