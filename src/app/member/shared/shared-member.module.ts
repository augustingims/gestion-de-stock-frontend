import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../layouts/footer/footer.component';
import { PaginationComponent } from '../components/pagination/pagination.component';
import { ButtonActionsComponent } from '../components/button-actions/button-actions.component';
import { CustomerSupplierItemComponent } from '../components/customer-supplier-item/customer-supplier-item.component';
import { NewCostumerSupplierComponent } from '../components/new-costumer-supplier/new-costumer-supplier.component';


@NgModule({
  declarations: [
    FooterComponent,
    PaginationComponent,
    ButtonActionsComponent,
    CustomerSupplierItemComponent,
    NewCostumerSupplierComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FooterComponent,
    PaginationComponent,
    ButtonActionsComponent,
    CustomerSupplierItemComponent,
    NewCostumerSupplierComponent
  ]
})
export class SharedMemberModule { }
