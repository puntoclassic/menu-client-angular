import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from "@angular/router";
import { catchError, map, Observable, of } from "rxjs";
import { AccountService } from "src/app/account/services/account.service";
import { MessageService } from "src/app/shared/services/message.service";

@Injectable({
  providedIn: "root",
})
export class AnonymousRequiredGuard implements CanActivate {
  userIsLogged: boolean = false;

  constructor(
    private accountService: AccountService,
    private router: Router,
    private appService: MessageService,
  ) {
    this.accountService.userLogged$.subscribe((logged) => {
      this.userIsLogged = logged;
    });
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.accountService.userLogged$.pipe(
      map((status) => {
        if (status) {
          return this.router.createUrlTree(["/account"]);
        } else {
          return true;
        }
      }),
    );
  }
}
