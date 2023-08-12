import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { OrderService } from "src/app/account/services/order.service";
import { CartService } from "src/app/cart/services/cart.service";
import { MessageService } from "src/app/shared/services/message.service";
import { MessageType } from "src/types";

@Component({
  selector: "app-creazione-ordine-page",
  templateUrl: "./creazione-ordine-page.component.html",
  styleUrls: ["./creazione-ordine-page.component.scss"],
})
export class CreazioneOrdinePageComponent implements OnInit {
  constructor(
    private cartService: CartService,
    private orderService: OrderService,
    private router: Router,
    private appService: MessageService,
  ) {}

  ngOnInit(): void {
    this.orderService.sendOrder().subscribe((response: any) => {
      this.cartService.resetCart();
      this.router.navigate(["/account"], { replaceUrl: true }).then(
        () => {
          this.appService.pushMessage({
            type: MessageType.SUCCESS,
            text: `Ordine creato ${response.orderId}`,
          });
        },
      );
    });
  }
}
