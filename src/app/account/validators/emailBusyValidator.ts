import {
  AbstractControl,
  AsyncValidatorFn,
  ValidationErrors,
} from "@angular/forms";
import { Observable, timer } from "rxjs";
import { map, switchMap } from "rxjs/operators";
import { AccountService } from "src/app/account/services/account.service";

export default class EmailBusyValidator {
  static createValidator(accountService: AccountService): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors> => {
      return timer(500).pipe(
        switchMap(() =>
          accountService
            .emailIsBusy(control.value)
            .pipe(
              map((result: boolean) => result ? { emailIsBusy: true } : null),
            )
        ),
      );
    };
  }
}
