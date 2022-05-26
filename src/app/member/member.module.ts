import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberComponent } from './member.component';
import { SharedModule } from '../shared/shared.module';
import { LayoutsModule } from './layouts/layouts.module';
import { SharedMemberModule } from './shared/shared-member.module';
import { MemberRoutingModule } from './member-routing.module';


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
