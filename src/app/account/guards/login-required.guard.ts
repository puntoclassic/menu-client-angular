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
import { MessageType } from "src/types";

@Injectable({
  providedIn: "root",
})
export class LoginRequiredGuard implements CanActivate {
  constructor(
    private accountService: AccountService,
    private router: Router,
    private appService: MessageService,
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
    return this.accountService.userLogged$.pipe(
      map((status) => {
        if (status) {
          return true;
        } else {
          this.router.navigate(["/account/login"], {
            queryParams: {
              backUrl: state.url,
            },
          }).then(() => {
            this.appService.pushMessage({
              type: MessageType.ERROR,
              text: "Questa pagina richiede l'accesso",
            });
          });
          return false;
        }
      }),
    );
  }
}
