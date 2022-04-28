import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MvtStockListComponent } from './mvt-stock-list/mvt-stock-list.component';

const routes: Routes = [
  {
    path: '',
    component: MvtStockListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MvtStockRoutingModule { }
