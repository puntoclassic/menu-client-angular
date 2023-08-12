import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { CartService } from "src/app/cart/services/cart.service";

@Component({
  selector: "app-carrello-page",
  templateUrl: "./carrello-page.component.html",
  styleUrls: ["./carrello-page.component.scss"],
})
export class CarrelloPageComponent implements OnInit, OnDestroy {
  cartHasItems: boolean = false;
  cartStatusSubscription: Subscription;

  constructor(private cartService: CartService) {
    this.cartStatusSubscription = this.cartService.cartStatus.subscribe(
      (status) => {
        this.cartHasItems = Object.keys(status.items).length > 0;
      },
    );
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.cartStatusSubscription.unsubscribe();
  }
}
