import { HttpClientModule } from "@angular/common/http";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { PriceOutputPipe } from "src/app/shared/pipes/price-output.pipe";
import { SharedModule } from "src/app/shared/shared.module";
import { fakeAppData } from "src/app/test/fakeAppData";
import { fakeEmptyCartData } from "src/app/test/fakeEmptyCartData";
import { fakeGuestAccountData } from "src/app/test/fakeGuestAccountData";
import { fakeSettingsData } from "src/app/test/fakeSettingsData";

import { CarrelloRowComponent } from "./carrello-row.component";

describe("CarrelloRowComponent", () => {
  let component: CarrelloRowComponent;
  let fixture: ComponentFixture<CarrelloRowComponent>;

  beforeEach(async () => {
    fakeGuestAccountData();

    fakeEmptyCartData();
    fakeSettingsData();
    await TestBed.configureTestingModule({
      imports: [
        SharedModule,
        RouterTestingModule.withRoutes([]),
      ],
      declarations: [CarrelloRowComponent, PriceOutputPipe],
    })
      .compileComponents();

    fixture = TestBed.createComponent(CarrelloRowComponent);
    component = fixture.componentInstance;
    component.row = {
      item: {},
    };
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
