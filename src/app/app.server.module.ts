import { NgModule } from '@angular/core';
import { ServerModule, ServerTransferStateModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { JsonLdModule } from 'ngx-seo';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    ServerTransferStateModule,
    JsonLdModule
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
