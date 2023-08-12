import { Inject, inject, Injectable, InjectionToken } from "@angular/core";
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from "@angular/common/http";
import { Observable } from "rxjs";
import { BACKEND_URL } from "src/app/shared/shared.module";

@Injectable()
export class ApiServerInterceptor implements HttpInterceptor {
  private backendUrl = inject(BACKEND_URL);

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler,
  ): Observable<HttpEvent<unknown>> {
    const apiReq = request.clone({
      url: `${this.backendUrl}/${request.url}`,
      withCredentials: true,
    });

    return next.handle(apiReq);
  }
}
