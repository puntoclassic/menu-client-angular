import { HttpClientModule } from "@angular/common/http";
import { TestBed } from "@angular/core/testing";
import { SharedModule } from "src/app/shared/shared.module";
import { fakeCustomerAccountData } from "src/app/test/fakeCustomerAccountData";
import { fakeSettingsData } from "src/app/test/fakeSettingsData";

import { AccountService } from "./account.service";

describe("AccountService", () => {
  let service: AccountService;

  beforeEach(() => {
    fakeCustomerAccountData();
    TestBed.configureTestingModule({
      imports: [
        SharedModule,
      ],
    });
    service = TestBed.inject(AccountService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
