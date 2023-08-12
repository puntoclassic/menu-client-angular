import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import {
  FetchOrderRequest,
  GetUserOrdersResponse,
} from "src/app/amministrazione/types";
import { CartService } from "src/app/cart/services/cart.service";
import { GetOrderDetailResponse } from "src/types";

@Injectable({
  providedIn: "root",
})
export class OrderService {
  constructor(private cartService: CartService, private http: HttpClient) {}

  sendOrder() {
    var state = this.cartService.cartStatus.getValue();

    return this.http.post("Api/Order/PostCreate", state);
  }

  getMyOrders() {
    return this.http.get<GetUserOrdersResponse>("Api/Order/GetUserOrders", {
      params: {
        ascending: false,
        orderBy: "id",
        page: 1,
        perPage: 20,
        paginated: true,
      },
    });
  }

  getOrderDetail(id: number) {
    return this.http.get<GetOrderDetailResponse>("Api/Order/GetOrderDetail", {
      params: {
        OrderId: id,
      },
    });
  }

  getPaymentUrl(id: number) {
    return this.http.get<{ paymentUrl: string }>("Api/Order/GetPaymentUrl", {
      params: {
        OrderId: id,
      },
    });
  }

  getAll(data: FetchOrderRequest) {
    return this.http.get("Api/Order/GetAll", {
      params: data,
    });
  }
}
