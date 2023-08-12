import { Component, OnInit } from "@angular/core";
import { OrderService } from "src/app/account/services/order.service";
import {
  GetUserOrdersItem,
  GetUserOrdersResponse,
} from "src/app/amministrazione/types";

@Component({
  selector: "app-i-miei-ordini-page",
  templateUrl: "./i-miei-ordini-page.component.html",
  styleUrls: ["./i-miei-ordini-page.component.scss"],
})
export class IMieiOrdiniPageComponent implements OnInit {
  items: GetUserOrdersItem[] = null;

  constructor(private orderService: OrderService) {}

  fetchData() {
    this.items = null;
    this.orderService.getMyOrders().subscribe(
      (response: GetUserOrdersResponse) => {
        this.items = response.items;
      },
    );
  }

  ngOnInit(): void {
    this.fetchData();
  }
}
