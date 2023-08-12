import { ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { AccountModule } from "src/app/account/account.module";
import { SharedModule } from "src/app/shared/shared.module";
import { fakeAppData } from "src/app/test/fakeAppData";
import { fakeCustomerAccountData } from "src/app/test/fakeCustomerAccountData";
import { fakeEmptyCartData } from "src/app/test/fakeEmptyCartData";
import { fakeGuestAccountData } from "src/app/test/fakeGuestAccountData";
import { fakeSettingsData } from "src/app/test/fakeSettingsData";

import { AccessoNegatoPageComponent } from "./accesso-negato-page.component";

describe("AccessoNegatoPageComponent", () => {
  let component: AccessoNegatoPageComponent;
  let fixture: ComponentFixture<AccessoNegatoPageComponent>;

  beforeEach(async () => {
    fakeCustomerAccountData();

    fakeEmptyCartData();
    fakeSettingsData();

    await TestBed.configureTestingModule({
      imports: [
        AccountModule,
        SharedModule,
        RouterTestingModule.withRoutes([]),
      ],
      declarations: [AccessoNegatoPageComponent],
    })
      .compileComponents();

    fixture = TestBed.createComponent(AccessoNegatoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
