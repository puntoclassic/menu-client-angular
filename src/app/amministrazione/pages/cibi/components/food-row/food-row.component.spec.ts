import { ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { PriceOutputPipe } from "src/app/shared/pipes/price-output.pipe";
import { SharedModule } from "src/app/shared/shared.module";
import { fakeSettingsData } from "src/app/test/fakeSettingsData";

import { FoodRowComponent } from "./food-row.component";

describe("FoodRowComponent", () => {
  let component: FoodRowComponent;
  let fixture: ComponentFixture<FoodRowComponent>;

  beforeEach(async () => {
    fakeSettingsData();
    await TestBed.configureTestingModule({
      imports: [
        SharedModule,
        RouterTestingModule.withRoutes([]),
      ],
      declarations: [FoodRowComponent, PriceOutputPipe],
    })
      .compileComponents();

    fixture = TestBed.createComponent(FoodRowComponent);
    component = fixture.componentInstance;
    component.food = {
      id: 1,
      name: "test",
      category: {
        name: "test",
      },
    };
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
