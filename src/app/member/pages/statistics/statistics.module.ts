import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatisticsRoutingModule } from './statistics-routing.module';
import { StatisticsComponent } from './statistics.component';
import { SharedMemberModule } from '../../shared/shared-member.module';

@NgModule({
  declarations: [StatisticsComponent],
  imports: [
    CommonModule,
    SharedMemberModule,
    StatisticsRoutingModule
  ]
})
export class StatisticsModule { }
