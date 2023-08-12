import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from "@angular/router";
import { map, Observable } from "rxjs";
import { CartService } from "src/app/cart/services/cart.service";

@Injectable({
  providedIn: "root",
})
export class CartFilledGuard implements CanActivate {
  constructor(private cartService: CartService, private router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.cartService.cartStatus.pipe(
      map((status) => {
        if (Object.keys(status.items).length > 0) {
          return true;
        } else {
          this.router.navigate(["/carrello"]);
          return false;
        }
      }),
    );
  }
}
