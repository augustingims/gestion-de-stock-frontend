import { NgModule } from '@angular/core';
import { RegisterComponent } from './register.component';
import { RegisterRoutingModule } from './register-routing.module';
import { SharedModule } from '../../shared/shared.module';




@NgModule({
  declarations: [RegisterComponent],
  imports: [
    SharedModule,
    RegisterRoutingModule
  ]
})
export class RegisterModule { }
