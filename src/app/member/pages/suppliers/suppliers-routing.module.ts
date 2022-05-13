import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuppliersListComponent } from './suppliers-list/suppliers-list.component';
import { NewCostumerSupplierComponent } from '../../components/new-costumer-supplier/new-costumer-supplier.component';


const routes: Routes = [
  {
    path: '',
    component: SuppliersListComponent
  },
  {
    path: 'nouveau',
    component: NewCostumerSupplierComponent,
    data: {
      origin: 'fournisseur'
    }
  },
  {
    path: ':id/edit',
    component: NewCostumerSupplierComponent,
    data: {
      origin: 'fournisseur'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuppliersRoutingModule { }
