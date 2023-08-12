import { HttpClientModule } from "@angular/common/http";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterTestingModule } from "@angular/router/testing";
import { SharedModule } from "src/app/shared/shared.module";
import { fakeAppData } from "src/app/test/fakeAppData";
import { fakeCategoryData } from "src/app/test/fakeCategoryData";
import { fakeEmptyCartData } from "src/app/test/fakeEmptyCartData";
import { fakeGuestAccountData } from "src/app/test/fakeGuestAccountData";
import { fakeSettingsData } from "src/app/test/fakeSettingsData";

import { TipologiaConsegnaPageComponent } from "./tipologia-consegna-page.component";

describe("TipologiaConsegnaPageComponent", () => {
  let component: TipologiaConsegnaPageComponent;
  let fixture: ComponentFixture<TipologiaConsegnaPageComponent>;

  beforeEach(async () => {
    fakeGuestAccountData();

    fakeCategoryData();
    fakeEmptyCartData();
    fakeSettingsData();
    await TestBed.configureTestingModule({
      imports: [
        SharedModule,
        RouterTestingModule.withRoutes([]),
      ],
      declarations: [TipologiaConsegnaPageComponent],
    })
      .compileComponents();

    fixture = TestBed.createComponent(TipologiaConsegnaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
