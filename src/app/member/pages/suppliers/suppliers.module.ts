import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuppliersRoutingModule } from './suppliers-routing.module';
import { SuppliersListComponent } from './suppliers-list/suppliers-list.component';
import { SharedMemberModule } from '../../shared/shared-member.module';

@NgModule({
  declarations: [SuppliersListComponent],
  imports: [
    CommonModule,
    SharedMemberModule,
    SuppliersRoutingModule
  ]
})
export class SuppliersModule { }
