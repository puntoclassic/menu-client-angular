import { of } from "rxjs";
import { AccountService } from "src/app/account/services/account.service";

export const fakeCustomerAccountData = () => {
  //ACCOUNT DATA
  spyOn(AccountService.prototype, "getAccountState").and.returnValue(of({
    id: 1,
    firstname: "Jonathan",
    lastname: "La Mela",
    role: "customer",
  }));
};
