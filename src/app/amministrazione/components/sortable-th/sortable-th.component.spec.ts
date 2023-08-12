import { ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { SharedModule } from "src/app/shared/shared.module";
import { fakeAdminAccountData } from "src/app/test/fakeAdminAccountData";
import { fakeAppData } from "src/app/test/fakeAppData";
import { fakeEmptyCartData } from "src/app/test/fakeEmptyCartData";
import { fakeSettingsData } from "src/app/test/fakeSettingsData";

import { SortableThComponent } from "./sortable-th.component";

describe("SortableThComponent", () => {
  let component: SortableThComponent;
  let fixture: ComponentFixture<SortableThComponent>;

  beforeEach(async () => {
    fakeAdminAccountData();

    fakeEmptyCartData();
    fakeSettingsData();
    await TestBed.configureTestingModule({
      imports: [
        SharedModule,
        RouterTestingModule.withRoutes([]),
      ],
      declarations: [SortableThComponent],
    })
      .compileComponents();

    fixture = TestBed.createComponent(SortableThComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
