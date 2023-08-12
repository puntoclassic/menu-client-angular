import { Component, OnDestroy, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable, Subscription } from "rxjs";
import { CartService } from "src/app/cart/services/cart.service";

@Component({
  selector: "app-cart-button",
  templateUrl: "./cart-button.component.html",
  styleUrls: ["./cart-button.component.scss"],
})
export class CartButtonComponent implements OnInit, OnDestroy {
  itemsCount: number = 0;
  cartItemsCount$: Observable<any>;
  itemsChange: Subscription;
  cartChange: Subscription;

  constructor(
    private cartService: CartService,
  ) {
    this.cartChange = this.cartService.cartStatus.subscribe((state) => {
      this.itemsCount = Object.keys(state.items).length;
    });
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.cartChange.unsubscribe();
  }
}
