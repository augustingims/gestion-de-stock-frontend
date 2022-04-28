import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersNewComponent } from './users-new/users-new.component';
import { UserItemComponent } from '../../components/user-item/user-item.component';
import { SharedMemberModule } from '../../shared/shared-member.module';


@NgModule({
  declarations: [UsersListComponent, UsersNewComponent, UserItemComponent],
  imports: [
    CommonModule,
    SharedMemberModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
