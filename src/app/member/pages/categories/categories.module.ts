import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesNewComponent } from './categories-new/categories-new.component';
import { CategoriesListComponent } from './categories-list/categories-list.component';
import { SharedMemberModule } from '../../shared/shared-member.module';


@NgModule({
  declarations: [CategoriesNewComponent, CategoriesListComponent],
  imports: [
    CommonModule,
    SharedMemberModule,
    CategoriesRoutingModule
  ]
})
export class CategoriesModule { }
