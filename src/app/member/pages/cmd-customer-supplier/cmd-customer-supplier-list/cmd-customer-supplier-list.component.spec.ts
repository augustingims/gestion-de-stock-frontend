import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmdCustomerSupplierListComponent } from './cmd-customer-supplier-list.component';

describe('CmdCustomerSupplierListComponent', () => {
  let component: CmdCustomerSupplierListComponent;
  let fixture: ComponentFixture<CmdCustomerSupplierListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmdCustomerSupplierListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CmdCustomerSupplierListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
