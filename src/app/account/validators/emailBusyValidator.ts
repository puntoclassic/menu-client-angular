import { Injectable } from '@angular/core';
import {
  AbstractControl,
  AsyncValidator,
  AsyncValidatorFn,
  ValidationErrors,
} from '@angular/forms';
import { Observable, timer } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { AccountService } from 'src/app/account/services/account.service';

@Injectable({ providedIn: 'root' })
export class EmailBusyValidator implements AsyncValidator {
  constructor(private accountService: AccountService) {}

  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    return timer(500).pipe(
      switchMap(() =>
        this.accountService
          .emailIsBusy(control.value)
          .pipe(
            map((result: boolean) => (result ? { emailIsBusy: true } : null))
          )
      )
    );
  }
}
