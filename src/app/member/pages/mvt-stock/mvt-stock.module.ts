import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MvtStockRoutingModule } from './mvt-stock-routing.module';
import { MvtStockListComponent } from './mvt-stock-list/mvt-stock-list.component';
import { MvtStockItemComponent } from '../../components/mvt-stock-item/mvt-stock-item.component';
import { MvtStockArticleComponent } from '../../components/mvt-stock-article/mvt-stock-article.component';
import { SharedMemberModule } from '../../shared/shared-member.module';

@NgModule({
  declarations: [MvtStockListComponent, MvtStockItemComponent, MvtStockArticleComponent],
  imports: [
    CommonModule,
    SharedMemberModule,
    MvtStockRoutingModule
  ]
})
export class MvtStockModule { }
