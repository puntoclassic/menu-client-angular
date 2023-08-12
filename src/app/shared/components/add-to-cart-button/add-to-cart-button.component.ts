import { Component, Input, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { CartService } from "src/app/cart/services/cart.service";

@Component({
  selector: "app-add-to-cart-button",
  templateUrl: "./add-to-cart-button.component.html",
  styleUrls: ["./add-to-cart-button.component.scss"],
})
export class AddToCartButtonComponent implements OnInit {
  @Input()
  item: any;

  constructor(
    private cartService: CartService,
  ) {}

  ngOnInit(): void {
  }

  addToCartAction() {
    this.cartService.addToCart(this.item);
  }
}
