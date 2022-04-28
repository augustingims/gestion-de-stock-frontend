import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { SharedMemberModule } from '../../shared/shared-member.module';


@NgModule({
  declarations: [CustomersListComponent],
  imports: [
    CommonModule,
    SharedMemberModule,
    CustomersRoutingModule
  ]
})
export class CustomersModule { }
