import { HttpClientModule } from "@angular/common/http";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { CassaButtonComponent } from "src/app/cart/components/cassa-button/cassa-button.component";
import { SharedModule } from "src/app/shared/shared.module";
import { fakeAppData } from "src/app/test/fakeAppData";
import { fakeEmptyCartData } from "src/app/test/fakeEmptyCartData";
import { fakeGuestAccountData } from "src/app/test/fakeGuestAccountData";
import { fakeSettingsData } from "src/app/test/fakeSettingsData";

import { CarrelloContentComponent } from "./carrello-content.component";

describe("CarrelloContentComponent", () => {
  let component: CarrelloContentComponent;
  let fixture: ComponentFixture<CarrelloContentComponent>;

  beforeEach(async () => {
    fakeGuestAccountData();

    fakeEmptyCartData();
    fakeSettingsData();

    await TestBed.configureTestingModule({
      imports: [
        SharedModule,
        RouterTestingModule.withRoutes([]),
      ],
      declarations: [CarrelloContentComponent, CassaButtonComponent],
    })
      .compileComponents();

    fixture = TestBed.createComponent(CarrelloContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
