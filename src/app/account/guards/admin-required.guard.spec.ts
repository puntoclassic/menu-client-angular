import { HttpClientModule } from "@angular/common/http";
import { TestBed } from "@angular/core/testing";
import {
  ActivatedRouteSnapshot,
  Route,
  RouterStateSnapshot,
  UrlSegment,
  UrlTree,
} from "@angular/router";
import { Observable } from "rxjs";
import { AccountService } from "src/app/account/services/account.service";
import { SharedModule } from "src/app/shared/shared.module";
import { fakeAdminAccountData } from "src/app/test/fakeAdminAccountData";
import { fakeCategoryData } from "src/app/test/fakeCategoryData";
import { fakeCustomerAccountData } from "src/app/test/fakeCustomerAccountData";
import { fakeSettingsData } from "src/app/test/fakeSettingsData";

import { AdminRequiredGuard } from "./admin-required.guard";

describe("AdminRequiredGuard", () => {
  let guard: AdminRequiredGuard;

  beforeEach(() => {
    fakeSettingsData();
    fakeAdminAccountData();

    TestBed.configureTestingModule({
      imports: [
        SharedModule,
      ],
    });
    guard = TestBed.inject(AdminRequiredGuard);
  });

  it("should be created", () => {
    expect(guard).toBeTruthy();
  });

  it("admin can access", () => {
    let routeMock: any = { snapshot: {} };
    let routeStateMock: any = { snapshot: {}, url: "/amministrazione" };
    var valore = guard.canActivate(routeMock, routeStateMock) as Observable<
      boolean | UrlTree
    >;

    valore.subscribe((risposta) => {
      expect(risposta).toBe(true);
    });
  });

  it("customer access fail", () => {
    let routeMock: any = { snapshot: {} };
    let routeStateMock: any = { snapshot: {}, url: "/amministrazione" };

    var service = TestBed.inject(AccountService);

    service.user$.next({
      role: "customer",
    });

    var valore = guard.canActivate(routeMock, routeStateMock) as Observable<
      boolean | UrlTree
    >;

    valore.subscribe((risposta: UrlTree) => {
      expect(risposta.fragment).toBe(null);
    });
  });
});
