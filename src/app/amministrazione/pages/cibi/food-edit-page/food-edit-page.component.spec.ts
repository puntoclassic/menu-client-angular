import { HttpClientModule } from "@angular/common/http";
import { ComponentFixture, fakeAsync, TestBed } from "@angular/core/testing";
import { ReactiveFormsModule } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";
import { map, of } from "rxjs";
import { AccountService } from "src/app/account/services/account.service";
import { routes } from "src/app/amministrazione/amministrazione.module";
import { FoodService } from "src/app/amministrazione/services/food.service";
import { MessageService } from "src/app/shared/services/message.service";
import { SharedModule } from "src/app/shared/shared.module";
import { fakeAdminAccountData } from "src/app/test/fakeAdminAccountData";
import { fakeAppData } from "src/app/test/fakeAppData";
import { fakeCategoryData } from "src/app/test/fakeCategoryData";
import { fakeEmptyCartData } from "src/app/test/fakeEmptyCartData";
import { fakeFoodData } from "src/app/test/fakeFoodData";
import { fakeSettingsData } from "src/app/test/fakeSettingsData";

import { FoodEditPageComponent } from "./food-edit-page.component";

describe("FoodEditPageComponent", () => {
  let component: FoodEditPageComponent;
  let fixture: ComponentFixture<FoodEditPageComponent>;

  beforeEach(async () => {
    fakeFoodData();
    fakeSettingsData();
    fakeEmptyCartData();
    fakeCategoryData();
    fakeAdminAccountData();

    await TestBed.configureTestingModule({
      imports: [
        SharedModule,
        RouterTestingModule.withRoutes([]),
      ],
      providers: [{
        provide: ActivatedRoute,
        useValue: {
          params: of({
            id: 1,
          }),
        },
      }],
      declarations: [FoodEditPageComponent],
    })
      .compileComponents();

    fixture = TestBed.createComponent(FoodEditPageComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should to be Pizza Margherita", () => {
    expect(component.form.value.name).toBe("Pizza Margherita");

    expect(component).toBeTruthy();
  });
});
