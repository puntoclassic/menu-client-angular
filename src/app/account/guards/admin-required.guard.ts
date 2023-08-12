import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from "@angular/router";
import { map, Observable } from "rxjs";
import { AccountService } from "src/app/account/services/account.service";
import { MessageService } from "src/app/shared/services/message.service";

@Injectable({
  providedIn: "root",
})
export class AdminRequiredGuard implements CanActivate {
  constructor(
    private accountService: AccountService,
    private router: Router,
  ) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.accountService.user$.pipe(
      map((user) => {
        if (user && user.role === "admin") {
          return true;
        } else {
          return this.router.createUrlTree(["/403"]);
        }
      }),
    );
  }
}
