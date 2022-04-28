import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CmdCustomerSupplierRoutingModule } from './cmd-customer-supplier-routing.module';
import { CmdCustomerSupplierListComponent } from './cmd-customer-supplier-list/cmd-customer-supplier-list.component';
import { CmdCustomerSupplierItemComponent } from '../../components/cmd-customer-supplier-item/cmd-customer-supplier-item.component';
import { CmdItemComponent } from '../../components/cmd-item/cmd-item.component';
import { NewCmdCostumerSupplierComponent } from '../../components/new-cmd-costumer-supplier/new-cmd-costumer-supplier.component';
import { SharedMemberModule } from '../../shared/shared-member.module';

@NgModule({
  declarations: [CmdCustomerSupplierListComponent, CmdCustomerSupplierItemComponent, CmdItemComponent, NewCmdCostumerSupplierComponent],
  imports: [
    CommonModule,
    SharedMemberModule,
    CmdCustomerSupplierRoutingModule
  ]
})
export class CmdCustomerSupplierModule { }
