import { of } from "rxjs";
import { OrderStateService } from "src/app/amministrazione/services/order-state.service";

export const fakeOrderStatesData = () => {
  spyOn(OrderStateService.prototype, "fetchOrderStates").and.returnValue(
    of([]),
  );

  spyOn(OrderStateService.prototype, "getOrderStatesForSelect").and.returnValue(
    of([]),
  );

  spyOn(OrderStateService.prototype, "getOrderState").and.returnValue(
    of({}),
  );

  spyOn(OrderStateService.prototype, "createOrderState").and.returnValue(
    of({}),
  );

  spyOn(OrderStateService.prototype, "updateOrderState").and.returnValue(
    of({}),
  );

  spyOn(OrderStateService.prototype, "deleteOrderState").and.returnValue(
    of({}),
  );
};
