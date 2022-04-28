import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmdCustomerSupplierItemComponent } from './cmd-customer-supplier-item.component';

describe('CmdCustomerSupplierItemComponent', () => {
  let component: CmdCustomerSupplierItemComponent;
  let fixture: ComponentFixture<CmdCustomerSupplierItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmdCustomerSupplierItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CmdCustomerSupplierItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
