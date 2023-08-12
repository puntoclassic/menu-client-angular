import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ActivatedRoute } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";
import { of } from "rxjs";
import { routes } from "src/app/account/account.module";
import { AccountService } from "src/app/account/services/account.service";
import { SharedModule } from "src/app/shared/shared.module";

import { fakeEmptyCartData } from "src/app/test/fakeEmptyCartData";
import { fakeGuestAccountData } from "src/app/test/fakeGuestAccountData";
import { fakeSettingsData } from "src/app/test/fakeSettingsData";

import { LoginPageComponent } from "./login-page.component";

describe("LoginPageComponent", () => {
  let component: LoginPageComponent;
  let fixture: ComponentFixture<LoginPageComponent>;

  beforeEach(async () => {
    fakeEmptyCartData();
    fakeSettingsData();
    fakeGuestAccountData();

    await TestBed.configureTestingModule({
      imports: [
        SharedModule,
        RouterTestingModule.withRoutes(routes),
      ],
      declarations: [LoginPageComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            queryParams: of({
              backUrl: "",
            }),
          },
        },
      ],
    })
      .compileComponents();

    fixture = TestBed.createComponent(LoginPageComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("test login success", () => {
    spyOn(AccountService.prototype, "login").and.callFake(
      (email: string, password: string) => {
        return email === "test@gmail.com"
          ? of({ status: "Success", verified: true, user: {} })
          : of({ status: "Failed", verified: false, user: {} });
      },
    );

    var service = TestBed.inject(AccountService);

    service.login("test@gmail.com", "").subscribe((response) => {
      expect(response.status).toBe("Success");
    });
  });

  it("test login fail", () => {
    spyOn(AccountService.prototype, "login").and.callFake(
      (email: string, password: string) => {
        return email === "test@gmail.com"
          ? of({ status: "Success", verified: true, user: {} })
          : of({ status: "Failed", verified: false, user: {} });
      },
    );

    var service = TestBed.inject(AccountService);

    service.login("testo@gmail.com", "").subscribe((response) => {
      expect(response.status).toBe("Failed");
    });
  });
});
