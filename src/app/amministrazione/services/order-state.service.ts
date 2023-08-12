import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import {
  CreateOrderStateData,
  FetchOrderStateRequest,
  UpdateOrderStateData,
} from "src/app/amministrazione/types";

@Injectable({
  providedIn: "root",
})
export class OrderStateService {
  constructor(private http: HttpClient) {}

  fetchOrderStates(data: FetchOrderStateRequest) {
    return this.http.get("Api/OrderState/GetAll", {
      params: data,
    });
  }

  getOrderStatesForSelect() {
    return this.http.get("Api/OrderState/GetAll", {
      params: {
        paginated: false,
      },
    });
  }

  getOrderState(id: number) {
    return this.http.get(`Api/OrderState/GetById/${id}`);
  }

  createOrderState(data: CreateOrderStateData) {
    return this.http.post("Api/OrderState/PostCreateOrderState", data);
  }

  updateOrderState(data: UpdateOrderStateData) {
    return this.http.post("Api/OrderState/PostUpdateOrderState", data);
  }

  deleteOrderState(id: number) {
    return this.http.post("Api/OrderState/PostDeleteOrderState", { id: id });
  }
}
