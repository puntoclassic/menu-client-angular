import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FormBuilder } from "@angular/forms";
import { RouterTestingModule } from "@angular/router/testing";
import { SharedModule } from "src/app/shared/shared.module";
import { fakeAdminAccountData } from "src/app/test/fakeAdminAccountData";
import { fakeAppData } from "src/app/test/fakeAppData";
import { fakeEmptyCartData } from "src/app/test/fakeEmptyCartData";
import { fakeSettingsData } from "src/app/test/fakeSettingsData";

import { AdminSearchFormComponent } from "./admin-search-form.component";

describe("AdminSearchFormComponent", () => {
  let component: AdminSearchFormComponent;
  let fixture: ComponentFixture<AdminSearchFormComponent>;

  beforeEach(async () => {
    fakeAdminAccountData();

    fakeEmptyCartData();
    fakeSettingsData();

    await TestBed.configureTestingModule({
      imports: [
        SharedModule,
        RouterTestingModule.withRoutes([]),
      ],
      declarations: [
        AdminSearchFormComponent,
      ],
      providers: [
        FormBuilder,
      ],
    })
      .compileComponents();

    fixture = TestBed.createComponent(AdminSearchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
