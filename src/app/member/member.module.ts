import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MemberRoutingModule } from './member-routing.module';
import { MemberComponent } from './member.component';
import { LayoutsModule } from './layouts/layouts.module';
import { SharedMemberModule } from './shared/shared-member.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [MemberComponent],
  imports: [
    CommonModule,
    LayoutsModule,
    SharedMemberModule,
    SharedModule,
    MemberRoutingModule
  ]
})
export class MemberModule { }
