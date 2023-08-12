import { ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { SharedModule } from "src/app/shared/shared.module";
import { fakeAdminAccountData } from "src/app/test/fakeAdminAccountData";
import { fakeSettingsData } from "src/app/test/fakeSettingsData";

import { AccountPageAdminLinksComponent } from "./account-page-admin-links.component";

describe("AccountPageAdminLinksComponent", () => {
  let component: AccountPageAdminLinksComponent;
  let fixture: ComponentFixture<AccountPageAdminLinksComponent>;

  beforeEach(async () => {
    fakeAdminAccountData();
    fakeSettingsData();

    await TestBed.configureTestingModule({
      imports: [
        SharedModule,
        RouterTestingModule.withRoutes([]),
      ],
      declarations: [AccountPageAdminLinksComponent],
    })
      .compileComponents();

    fixture = TestBed.createComponent(AccountPageAdminLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
