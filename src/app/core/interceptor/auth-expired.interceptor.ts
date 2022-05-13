import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

import { AccountService } from '../auth/account.service';
import { AuthJwtService } from '../auth/auth-jwt.service';

@Injectable()
export class AuthExpiredInterceptor implements HttpInterceptor {
  constructor(
    private router: Router,
    private authJwtService: AuthJwtService,
    private accountService: AccountService
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      tap({
        error: (err: HttpErrorResponse) => {
          if ([401, 403, 0].includes(err.status) && err.url && !err.url.includes('gestiondestock/v1/utilisateurs/account')) {
            this.authJwtService.logoutWithoutObserver();
          }
        },
      })
    );
  }
}
