import { HttpClientModule } from "@angular/common/http";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FormBuilder } from "@angular/forms";
import { RouterTestingModule } from "@angular/router/testing";
import { SharedModule } from "src/app/shared/shared.module";
import { fakeAppData } from "src/app/test/fakeAppData";
import { fakeEmptyCartData } from "src/app/test/fakeEmptyCartData";
import { fakeGuestAccountData } from "src/app/test/fakeGuestAccountData";
import { fakeSettingsData } from "src/app/test/fakeSettingsData";

import { VerificaAccountPageComponent } from "./verifica-account-page.component";

describe("VerificaAccountPageComponent", () => {
  let component: VerificaAccountPageComponent;
  let fixture: ComponentFixture<VerificaAccountPageComponent>;

  beforeEach(async () => {
    fakeEmptyCartData();
    fakeSettingsData();

    fakeGuestAccountData();

    await TestBed.configureTestingModule({
      imports: [
        SharedModule,
        RouterTestingModule.withRoutes([]),
      ],
      declarations: [VerificaAccountPageComponent],
      providers: [FormBuilder],
    })
      .compileComponents();

    fixture = TestBed.createComponent(VerificaAccountPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
