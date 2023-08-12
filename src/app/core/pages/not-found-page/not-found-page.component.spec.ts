import { ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { SharedModule } from "src/app/shared/shared.module";
import { fakeEmptyCartData } from "src/app/test/fakeEmptyCartData";
import { fakeGuestAccountData } from "src/app/test/fakeGuestAccountData";
import { fakeSettingsData } from "src/app/test/fakeSettingsData";

import { NotFoundPageComponent } from "./not-found-page.component";

describe("NotFoundPageComponent", () => {
  let component: NotFoundPageComponent;
  let fixture: ComponentFixture<NotFoundPageComponent>;

  beforeEach(async () => {
    fakeEmptyCartData();
    fakeSettingsData();
    fakeGuestAccountData();
    await TestBed.configureTestingModule({
      imports: [
        SharedModule,
        RouterTestingModule.withRoutes([]),
      ],
      declarations: [NotFoundPageComponent],
    })
      .compileComponents();

    fixture = TestBed.createComponent(NotFoundPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
