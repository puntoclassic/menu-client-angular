import { HttpClientModule } from "@angular/common/http";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { AdminSearchFormComponent } from "src/app/amministrazione/components/admin-search-form/admin-search-form.component";
import { PaginatorComponent } from "src/app/amministrazione/components/paginator/paginator.component";
import { PerPageSelectorComponent } from "src/app/amministrazione/components/per-page-selector/per-page-selector.component";
import { CategoryRowComponent } from "src/app/amministrazione/pages/categorie/components/category-row/category-row.component";
import { SharedModule } from "src/app/shared/shared.module";
import { fakeAdminAccountData } from "src/app/test/fakeAdminAccountData";
import { fakeAppData } from "src/app/test/fakeAppData";
import { fakeCategoryData } from "src/app/test/fakeCategoryData";
import { fakeEmptyCartData } from "src/app/test/fakeEmptyCartData";
import { fakeSettingsData } from "src/app/test/fakeSettingsData";

import { CategoryListPageComponent } from "./category-list-page.component";

describe("CategoryListPageComponent", () => {
  let component: CategoryListPageComponent;
  let fixture: ComponentFixture<CategoryListPageComponent>;

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
      declarations: [
        CategoryListPageComponent,
        CategoryRowComponent,
        AdminSearchFormComponent,
        PerPageSelectorComponent,
        PaginatorComponent,
      ],
    })
      .compileComponents();

    fixture = TestBed.createComponent(CategoryListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
