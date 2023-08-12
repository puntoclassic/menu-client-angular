import { ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { RouterTestingModule } from "@angular/router/testing";
import { AccountPageAdminLinksComponent } from "src/app/account/components/account-page-admin-links/account-page-admin-links.component";

import { SharedModule } from "src/app/shared/shared.module";
import { fakeAdminAccountData as fakeAdminAccountData } from "src/app/test/fakeAdminAccountData";
import { fakeAppData } from "src/app/test/fakeAppData";
import { fakeEmptyCartData } from "src/app/test/fakeEmptyCartData";
import { fakeCustomerAccountData } from "src/app/test/fakeCustomerAccountData";
import { fakeSettingsData } from "src/app/test/fakeSettingsData";

import { AccountPageComponent } from "./account-page.component";
import { fakeCategoryData } from "src/app/test/fakeCategoryData";

describe("AccountPageComponent", () => {
  let component: AccountPageComponent;
  let fixture: ComponentFixture<AccountPageComponent>;

  beforeEach(async () => {
    fakeAdminAccountData();
    fakeEmptyCartData();
    fakeSettingsData();

    await TestBed.configureTestingModule({
      imports: [
        SharedModule,
        RouterTestingModule.withRoutes([]),
      ],
      providers: [],
      declarations: [AccountPageComponent, AccountPageAdminLinksComponent],
    })
      .compileComponents();

    fixture = TestBed.createComponent(AccountPageComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("admin dashboard visible", () => {
    const { debugElement } = fixture;

    const counter = debugElement.query(By.css("app-account-page-admin-links"));
    expect(counter).toBeTruthy();
  });

  it("admin dashboard not visible", () => {
    const { debugElement } = fixture;

    component.user.role = "customer";
    fixture.detectChanges();

    const counter = debugElement.query(By.css("app-account-page-admin-links"));
    expect(counter).toBeFalsy();
  });
});
