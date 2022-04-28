import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticlesRoutingModule } from './articles-routing.module';
import { ArticlesListComponent } from './articles-list/articles-list.component';
import { ArticleItemComponent } from '../../components/article-item/article-item.component';
import { SharedMemberModule } from '../../shared/shared-member.module';
import { ArticlesNewComponent } from './articles-new/articles-new.component';


@NgModule({
  declarations: [ArticlesListComponent, ArticleItemComponent, ArticlesNewComponent],
  imports: [
    CommonModule,
    SharedMemberModule,
    ArticlesRoutingModule
  ]
})
export class ArticlesModule { }
