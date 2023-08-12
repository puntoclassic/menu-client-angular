import { HttpClientModule } from "@angular/common/http";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterTestingModule } from "@angular/router/testing";
import { PriceOutputPipe } from "src/app/shared/pipes/price-output.pipe";
import { SharedModule } from "src/app/shared/shared.module";
import { fakeAppData } from "src/app/test/fakeAppData";
import { fakeCategoryData } from "src/app/test/fakeCategoryData";
import { fakeEmptyCartData } from "src/app/test/fakeEmptyCartData";
import { fakeGuestAccountData } from "src/app/test/fakeGuestAccountData";
import { fakeSettingsData } from "src/app/test/fakeSettingsData";

import { RiepilogoOrdinePageComponent } from "./riepilogo-ordine-page.component";

describe("RiepilogoOrdinePageComponent", () => {
  let component: RiepilogoOrdinePageComponent;
  let fixture: ComponentFixture<RiepilogoOrdinePageComponent>;

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
      declarations: [RiepilogoOrdinePageComponent, PriceOutputPipe],
    })
      .compileComponents();

    fixture = TestBed.createComponent(RiepilogoOrdinePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
