import {
  Component,
  HostBinding,
  OnDestroy,
  OnInit,
  ViewEncapsulation,
} from "@angular/core";
import { Subscription } from "rxjs";
import { AccountService } from "src/app/account/services/account.service";
import { CartService } from "src/app/cart/services/cart.service";

@Component({
  selector: "app-carrello-content",
  templateUrl: "./carrello-content.component.html",
  styleUrls: ["./carrello-content.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class CarrelloContentComponent implements OnInit, OnDestroy {
  @HostBinding("class")
  classes = "flex flex-col";

  cartStatusSubscription: Subscription;
  items: any;
  keys: any;
  total: string;
  userLogged: any;
  userLoggedSubscription: Subscription;

  constructor(
    private cartService: CartService,
    private accountService: AccountService,
  ) {
    this.cartStatusSubscription = this.cartService.cartStatus.subscribe(
      (status) => {
        this.items = Object.values(status.items);
        this.keys = Object.keys(status.items);
        this.total = status.total.toFixed(2);
      },
    );

    this.userLoggedSubscription = this.accountService.userLogged$.subscribe(
      (status) => {
        this.userLogged = status;
      },
    );
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.cartStatusSubscription.unsubscribe();
  }
}
