import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CmdCustomerSupplierListComponent } from './cmd-customer-supplier-list/cmd-customer-supplier-list.component';
import { NewCmdCostumerSupplierComponent } from '../../components/new-cmd-costumer-supplier/new-cmd-costumer-supplier.component';

const routes: Routes = [
  {
    path: '',
    component: CmdCustomerSupplierListComponent,
  },
  {
    path: 'nouvellecommande',
    component: NewCmdCostumerSupplierComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CmdCustomerSupplierRoutingModule { }
