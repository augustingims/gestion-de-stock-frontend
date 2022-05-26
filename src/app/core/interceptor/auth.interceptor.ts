import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import { LoaderService } from '../../shared/components/loader/service/loader.service';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {LocalStorageService} from 'ngx-webstorage';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private loaderService: LoaderService,
    private $localStorage: LocalStorageService,
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loaderService.show();
    const token: string | null = this.$localStorage.retrieve('access_token');
    if (token) {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
      });
    }
    return this.handleRequest(req, next);
  }

  handleRequest(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(tap((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse){
        this.loaderService.hide();
      }
    }, (err: any) => {
      this.loaderService.hide();
    }));
  }
}
