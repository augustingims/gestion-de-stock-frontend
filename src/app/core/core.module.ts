import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { Title } from '@angular/platform-browser';
import { AuthExpiredInterceptor } from './interceptor/auth-expired.interceptor';
import { AuthInterceptor } from './interceptor/auth.interceptor';
import { ErrorHandlerInterceptor } from './interceptor/error-handler.interceptor';
import { TransferStateInterceptor } from './interceptor/transfert-state.interceptor';



@NgModule({
  declarations: [],
  imports: [
    HttpClientModule,
    NgxWebstorageModule.forRoot({ prefix: 'app', separator: '-' })
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
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TransferStateInterceptor,
      multi: true
    }
  ]
})
export class CoreModule { }
