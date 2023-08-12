import { HttpClientModule } from "@angular/common/http";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { ActivatedRoute } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";
import { of } from "rxjs";
import { SharedModule } from "src/app/shared/shared.module";
import { fakeAppData } from "src/app/test/fakeAppData";
import { fakeEmptyCartData } from "src/app/test/fakeEmptyCartData";
import { fakeGuestAccountData } from "src/app/test/fakeGuestAccountData";
import { fakeSettingsData } from "src/app/test/fakeSettingsData";

import { ResetPasswordTokenPageComponent } from "./reset-password-token-page.component";

describe("ResetPasswordTokenPageComponent", () => {
  let component: ResetPasswordTokenPageComponent;
  let fixture: ComponentFixture<ResetPasswordTokenPageComponent>;

  beforeEach(async () => {
    fakeEmptyCartData();
    fakeSettingsData();

    fakeGuestAccountData();

    await TestBed.configureTestingModule({
      imports: [
        SharedModule,
        RouterTestingModule.withRoutes([]),
      ],
      declarations: [ResetPasswordTokenPageComponent],
      providers: [{
        provide: ActivatedRoute,
        useValue: {
          queryParams: of({
            token: "",
          }),
        },
      }],
    })
      .compileComponents();

    fixture = TestBed.createComponent(ResetPasswordTokenPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
