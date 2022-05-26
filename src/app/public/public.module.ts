import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginModule } from './login/login.module';
import { RegisterModule } from './register/register.module';
import { PublicRoutingModule } from './public-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LoginModule,
    RegisterModule,
    PublicRoutingModule
  ]
})
export class PublicModule { }
