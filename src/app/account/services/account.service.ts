import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject, Subject } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';

import {
  ChangePasswordFields,
  GenericPostResponse,
  PersonalInfoFields,
  ResetPasswordTokenFields,
  SigninFields,
} from 'src/types';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  user$: ReplaySubject<any> = new ReplaySubject<any>(1);
  userLogged$: ReplaySubject<boolean> = new ReplaySubject<boolean>(1);

  constructor(private http: HttpClient) {
    this.loadAccountState();
  }

  loadAccountState() {
    var user$ = this.user$;
    var userLogged$ = this.userLogged$;
    try {
      this.getAccountState().subscribe({
        error(err) {
          user$.next(null);
          userLogged$.next(false);
        },
        next(value) {
          user$.next(value.user);
          userLogged$.next(true);
        },
      });
    } catch (err) {}
  }

  getUser(): ReplaySubject<any> {
    return this.user$;
  }

  getAccountState() {
    return this.http.get<any>('Api/Account/GetAccountStatus');
  }

  emailIsBusy(email: string): Observable<boolean> {
    return new Observable((emitter) => {
      if (email != '') {
        this.http
          .get<any>('Api/Account/GetEmailIsBusy', {
            params: {
              email: email,
            },
          })
          .subscribe((response: boolean) => {
            emitter.next(response);
            emitter.complete();
          });
      } else {
        emitter.next(false);
        emitter.complete();
      }
    });
  }

  login(
    email: string,
    password: string
  ): Observable<{ status: string; verified?: boolean; user?: any }> {
    var userLogged = this.userLogged$;
    var user$ = this.user$;
    return new Observable((emitter) => {
      this.http
        .post<{ user?: any }>('Api/Account/PostLogin', {
          email: email,
          password: password,
        })
        .subscribe({
          next(value) {
            var { user } = value;

            if (user.verified) {
              //login ok
              user$.next(user);
              emitter.next({
                status: 'success',
                verified: true,
                user: user,
              });
              userLogged.next(true);
            } else {
              emitter.next({
                status: 'success',
                verified: false,
              });

              userLogged.next(false);
            }
            emitter.complete();
          },
          error(err) {
            emitter.next({
              status: 'failed',
            });
            userLogged.next(false);

            emitter.complete();
          },
        });
    });
  }

  signin(data: SigninFields): Observable<{ status: string }> {
    return new Observable((emitter) => {
      this.http.post('Api/Account/PostCreateAccount', data).subscribe({
        error(err) {
          emitter.next({
            status: 'fail',
          });
        },
        next(value) {
          emitter.next({
            status: 'success',
          });
        },
      });
    });
  }

  logout(): Observable<boolean> {
    return new Observable((emitter) => {
      this.http.get('Api/Account/GetLogout').subscribe(() => {
        this.user$.next(null);
        this.userLogged$.next(false);
        emitter.next(true);
        emitter.complete();
      });
    });
  }

  resendActivationEmail(email: string) {
    return new Observable((emitter) => {
      this.http
        .post('Api/Account/PostRequireNewToken', {
          email: email,
        })
        .subscribe(() => {
          emitter.next(true);
          emitter.complete();
        });
    });
  }

  activateAccount(token: string, email: string): Observable<boolean> {
    return new Observable((emitter) => {
      this.http
        .post('Api/Account/PostActivateAccountByToken', {
          token: token,
          email: email,
        })
        .subscribe({
          error(err) {
            emitter.next(false);
            emitter.complete();
          },
          next(value) {
            emitter.next(true);
            emitter.complete();
          },
        });
    });
  }

  resetPasswordEmail(email: string): Observable<boolean> {
    return new Observable((emitter) => {
      this.http
        .post('Api/Account/PostResetPassword', {
          email: email,
        })
        .subscribe(() => {
          emitter.next(true);
          emitter.complete();
        });
    });
  }

  resetPasswordWithToken(data: ResetPasswordTokenFields): Observable<boolean> {
    return new Observable((emitter) => {
      this.http.post('Api/Account/PostChangePasswordByToken', data).subscribe({
        error(err) {
          emitter.next(false);
          emitter.complete();
        },
        next(value) {
          emitter.next(true);
          emitter.complete();
        },
      });
    });
  }

  changePassword(data: ChangePasswordFields): Observable<{ type: string }> {
    return new Observable((emitter) => {
      this.http
        .post<HttpResponse<GenericPostResponse>>(
          'Api/Account/PostUpdatePassword',
          data
        )
        .subscribe({
          error(err: HttpResponse<any>) {
            emitter.next({
              type: err.status == 403 ? 'Bad old password' : 'Bad request',
            });

            emitter.complete();
          },
          next(value) {
            emitter.next({
              type: 'Success',
            });
            emitter.complete();
          },
        });
    });
  }

  updatePersonalInfo(data: PersonalInfoFields) {
    return new Observable((emitter) => {
      this.http.post('Api/Account/PostUpdatePersonalInfo', data).subscribe({
        error(err) {
          emitter.next(false);
          emitter.complete();
        },
        next(value) {
          emitter.next(true);
          emitter.complete();
        },
      });
    });
  }
}
