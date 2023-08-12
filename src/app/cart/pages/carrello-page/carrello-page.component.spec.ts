import { HttpClientModule } from "@angular/common/http";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { SharedModule } from "src/app/shared/shared.module";
import { fakeAppData } from "src/app/test/fakeAppData";
import { fakeCategoryData } from "src/app/test/fakeCategoryData";
import { fakeEmptyCartData } from "src/app/test/fakeEmptyCartData";
import { fakeGuestAccountData } from "src/app/test/fakeGuestAccountData";
import { fakeSettingsData } from "src/app/test/fakeSettingsData";

import { CarrelloPageComponent } from "./carrello-page.component";

describe("CarrelloPageComponent", () => {
  let component: CarrelloPageComponent;
  let fixture: ComponentFixture<CarrelloPageComponent>;

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
      declarations: [CarrelloPageComponent],
    })
      .compileComponents();

    fixture = TestBed.createComponent(CarrelloPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
