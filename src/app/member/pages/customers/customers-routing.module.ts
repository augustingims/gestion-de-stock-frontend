import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { NewCostumerSupplierComponent } from '../../components/new-costumer-supplier/new-costumer-supplier.component';


const routes: Routes = [
  {
    path: '',
    component: CustomersListComponent
  },
  {
    path: 'nouveau',
    component: NewCostumerSupplierComponent,
    data: {
      origin: 'client'
    }
  },
  {
    path: ':id/edit',
    component: NewCostumerSupplierComponent,
    data: {
      origin: 'client'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
