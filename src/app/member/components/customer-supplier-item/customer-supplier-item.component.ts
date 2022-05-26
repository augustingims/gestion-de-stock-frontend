import {Component, Input, OnInit, Output, EventEmitter, ChangeDetectionStrategy} from '@angular/core';
import { CustomerService } from '../../pages/customers/service/customer.service';
import { SupplierService } from '../../pages/suppliers/service/supplier.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-customer-supplier-item',
  templateUrl: './customer-supplier-item.component.html',
  styleUrls: ['./customer-supplier-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomerSupplierItemComponent implements OnInit {

  @Input()
  origin = '';
  @Input()
  clientFournisseur: any = {};
  @Output()
  deleteResult = new EventEmitter();

  constructor(
    private router: Router,
    private customerService: CustomerService,
    private supplierService: SupplierService,
  ) { }

  ngOnInit(): void {
  }

  update(): void {
    if (this.origin === 'client') {
      this.router.navigate(['clients', this.clientFournisseur.id, 'edit']);
    } else if (this.origin === 'fournisseur') {
      this.router.navigate(['fournisseurs', this.clientFournisseur.id, 'edit']);
    }
  }

  confirmDelete(): void {
    if (this.origin === 'client') {
      this.customerService.deleteCustomer(this.clientFournisseur.id)
        .subscribe(res => {
          this.deleteResult.emit('success');
        }, error => {
          this.deleteResult.emit(error.error.error);
        });
    } else if (this.origin === 'fournisseur') {
      this.supplierService.deleteSupplier(this.clientFournisseur.id)
        .subscribe(res => {
          this.deleteResult.emit('success');
        }, error => {
          this.deleteResult.emit(error.error.error);
        });
    }
  }
}
