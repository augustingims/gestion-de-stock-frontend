import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerSupplierItemComponent } from './customer-supplier-item.component';

describe('CustomerSupplierItemComponent', () => {
  let component: CustomerSupplierItemComponent;
  let fixture: ComponentFixture<CustomerSupplierItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerSupplierItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerSupplierItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
