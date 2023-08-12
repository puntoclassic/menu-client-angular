import { HttpClientModule } from "@angular/common/http";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FormBuilder, ReactiveFormsModule } from "@angular/forms";
import { RouterTestingModule } from "@angular/router/testing";
import { SharedModule } from "src/app/shared/shared.module";
import { fakeAppData } from "src/app/test/fakeAppData";
import { fakeEmptyCartData } from "src/app/test/fakeEmptyCartData";
import { fakeGuestAccountData } from "src/app/test/fakeGuestAccountData";
import { fakeSettingsData } from "src/app/test/fakeSettingsData";

import { ResetPasswordPageComponent } from "./reset-password-page.component";

describe("ResetPasswordPageComponent", () => {
  let component: ResetPasswordPageComponent;
  let fixture: ComponentFixture<ResetPasswordPageComponent>;

  beforeEach(async () => {
    fakeEmptyCartData();
    fakeSettingsData();

    fakeGuestAccountData();

    await TestBed.configureTestingModule({
      imports: [
        SharedModule,
        RouterTestingModule.withRoutes([]),
      ],
      declarations: [ResetPasswordPageComponent],
    })
      .compileComponents();

    fixture = TestBed.createComponent(ResetPasswordPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
