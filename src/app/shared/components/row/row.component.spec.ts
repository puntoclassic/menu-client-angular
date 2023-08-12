import { ComponentFixture, TestBed } from "@angular/core/testing";
import { fakeAppData } from "src/app/test/fakeAppData";
import { fakeCustomerAccountData } from "src/app/test/fakeCustomerAccountData";
import { fakeEmptyCartData } from "src/app/test/fakeEmptyCartData";
import { fakeSettingsData } from "src/app/test/fakeSettingsData";

import { RowComponent } from "./row.component";

describe("RowComponent", () => {
  let component: RowComponent;
  let fixture: ComponentFixture<RowComponent>;

  beforeEach(async () => {
    fakeCustomerAccountData();

    fakeEmptyCartData();
    fakeSettingsData();
    await TestBed.configureTestingModule({
      declarations: [RowComponent],
    })
      .compileComponents();

    fixture = TestBed.createComponent(RowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
