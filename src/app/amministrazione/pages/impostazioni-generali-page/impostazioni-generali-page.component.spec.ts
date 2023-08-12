import { HttpClient, HttpClientModule } from "@angular/common/http";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterTestingModule } from "@angular/router/testing";
import { SharedModule } from "src/app/shared/shared.module";
import { fakeAdminAccountData } from "src/app/test/fakeAdminAccountData";
import { fakeAppData } from "src/app/test/fakeAppData";
import { fakeCategoryData } from "src/app/test/fakeCategoryData";
import { fakeEmptyCartData } from "src/app/test/fakeEmptyCartData";
import { fakeOrderStatesData } from "src/app/test/fakeOrderStatesData";
import { fakeSettingsData } from "src/app/test/fakeSettingsData";

import { ImpostazioniGeneraliPageComponent } from "./impostazioni-generali-page.component";

describe("ImpostazioniGeneraliPageComponent", () => {
  let component: ImpostazioniGeneraliPageComponent;
  let fixture: ComponentFixture<ImpostazioniGeneraliPageComponent>;

  beforeEach(async () => {
    fakeAdminAccountData();

    fakeCategoryData();
    fakeEmptyCartData();
    fakeSettingsData();
    fakeOrderStatesData();
    await TestBed.configureTestingModule({
      imports: [
        SharedModule,
        RouterTestingModule.withRoutes([]),
      ],
      declarations: [ImpostazioniGeneraliPageComponent],
    })
      .compileComponents();

    fixture = TestBed.createComponent(ImpostazioniGeneraliPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
