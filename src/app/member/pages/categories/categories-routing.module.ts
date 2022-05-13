import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesListComponent } from './categories-list/categories-list.component';
import { CategoriesNewComponent } from './categories-new/categories-new.component';

const routes: Routes = [
  {
    path: '',
    component: CategoriesListComponent,
  },
  {
    path: 'nouvelle',
    component: CategoriesNewComponent,
  },
  {
    path: ':idCategory/edit',
    component: CategoriesNewComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule { }
