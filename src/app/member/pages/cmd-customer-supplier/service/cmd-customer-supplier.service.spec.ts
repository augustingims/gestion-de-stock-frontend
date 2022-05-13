import { TestBed } from '@angular/core/testing';

import { CmdCustomerSupplierService } from './cmd-customer-supplier.service';

describe('CmdCustomerSupplierService', () => {
  let service: CmdCustomerSupplierService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CmdCustomerSupplierService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
