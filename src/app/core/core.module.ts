import { NgModule } from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { AuthInterceptor } from './interceptor/auth.interceptor';
import { AuthExpiredInterceptor } from './interceptor/auth-expired.interceptor';
import { ErrorHandlerInterceptor } from './interceptor/error-handler.interceptor';
import {Title} from '@angular/platform-browser';



@NgModule({
  imports: [
    HttpClientModule,
  ],
  providers: [
    Title,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthExpiredInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorHandlerInterceptor,
      multi: true
    }
  ]
})
export class CoreModule { }
