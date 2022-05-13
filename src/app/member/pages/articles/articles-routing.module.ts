import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticlesListComponent } from './articles-list/articles-list.component';
import { ArticlesNewComponent } from './articles-new/articles-new.component';

const routes: Routes = [
  {
    path: '',
    component: ArticlesListComponent
  },
  {
    path: 'nouveau',
    component: ArticlesNewComponent
  },
  {
    path: ':idArticle/edit',
    component: ArticlesNewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticlesRoutingModule { }
