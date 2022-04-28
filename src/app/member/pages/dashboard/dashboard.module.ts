import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { SharedMemberModule } from '../../shared/shared-member.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    SharedMemberModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
