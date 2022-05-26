import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import { ClientDto } from '../../../../gs-api/src/models/client-dto';

@Component({
  selector: 'app-cmd-customer-supplier-item',
  templateUrl: './cmd-customer-supplier-item.component.html',
  styleUrls: ['./cmd-customer-supplier-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CmdCustomerSupplierItemComponent implements OnInit {

  @Input()
  origin = '';
  @Input()
  order: any = {};

  cltFrs: ClientDto | undefined = {};

  constructor() { }

  ngOnInit(): void {
    this.extractCustomerSupplier();
  }

  update(): void {
  }

  extractCustomerSupplier(): void {
    if (this.origin === 'client') {
      this.cltFrs = this.order?.client;
    } else if (this.origin === 'fournisseur') {
      this.cltFrs = this.order.fournisseur;
    }
  }

}
