import { of } from "rxjs";
import { AccountService } from "src/app/account/services/account.service";

export const fakeGuestAccountData = () => {
  //ACCOUNT DATA
  spyOn(AccountService.prototype, "getAccountState").and.returnValue(of(null));
  spyOn(AccountService.prototype, "activateAccount").and.callFake((token) => {
    return token === "testtoken" ? of(true) : of(false);
  });
};
