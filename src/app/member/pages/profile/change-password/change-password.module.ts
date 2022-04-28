import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangePasswordComponent } from './change-password.component';
import { SharedMemberModule } from '../../../shared/shared-member.module';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ChangePasswordComponent
  }
];

@NgModule({
  declarations: [ChangePasswordComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedMemberModule,
  ],
  exports: [RouterModule]
})
export class ChangePasswordModule { }
