import { HttpClientModule } from "@angular/common/http";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ActivatedRoute } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";
import { of } from "rxjs";
import { AccountService } from "src/app/account/services/account.service";
import { MessageService } from "src/app/shared/services/message.service";
import { SharedModule } from "src/app/shared/shared.module";
import { fakeAppData } from "src/app/test/fakeAppData";
import { fakeCategoryData } from "src/app/test/fakeCategoryData";
import { fakeEmptyCartData } from "src/app/test/fakeEmptyCartData";
import { fakeGuestAccountData } from "src/app/test/fakeGuestAccountData";
import { fakeSettingsData } from "src/app/test/fakeSettingsData";

import { VerificaAccountTokenPageComponent } from "./verifica-account-token-page.component";

describe("VerificaAccountTokenPageComponent", () => {
  let component: VerificaAccountTokenPageComponent;
  let fixture: ComponentFixture<VerificaAccountTokenPageComponent>;

  beforeEach(async () => {
    fakeEmptyCartData();
    fakeCategoryData();
    fakeSettingsData();

    fakeGuestAccountData();

    await TestBed.configureTestingModule({
      imports: [
        SharedModule,
        RouterTestingModule.withRoutes([]),
      ],
      declarations: [VerificaAccountTokenPageComponent],
      providers: [
        AccountService,
        MessageService,
        {
          provide: ActivatedRoute,
          useValue: {
            queryParams: of({
              token: "testtoken",
            }),
          },
        },
      ],
    })
      .compileComponents();

    fixture = TestBed.createComponent(VerificaAccountTokenPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
