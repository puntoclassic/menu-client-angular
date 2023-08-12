import { Component, OnInit } from "@angular/core";
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  Router,
} from "@angular/router";
import { OrderService } from "src/app/account/services/order.service";
import { GetOrderDetailResponse } from "src/types";

@Component({
  selector: "app-ordine-detail-page",
  templateUrl: "./ordine-detail-page.component.html",
  styleUrls: ["./ordine-detail-page.component.scss"],
})
export class OrdineDetailPageComponent implements OnInit {
  item: GetOrderDetailResponse;

  id: number;

  constructor(
    private orderService: OrderService,
    private activeRouter: ActivatedRoute,
    private router: Router,
  ) {
    this.activeRouter.params.subscribe((value) => {
      this.id = value.id;
    });
  }

  paga(): void {
    this.orderService.getPaymentUrl(this.id).subscribe((response) => {
      window.location.href = response.paymentUrl;
    });
  }

  ngOnInit(): void {
    this.orderService.getOrderDetail(this.id).subscribe((response) => {
      this.item = response;
    });
  }
}
