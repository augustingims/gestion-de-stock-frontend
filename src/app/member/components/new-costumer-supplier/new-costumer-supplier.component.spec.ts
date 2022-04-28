import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCostumerSupplierComponent } from './new-costumer-supplier.component';

describe('NewCostumerSupplierComponent', () => {
  let component: NewCostumerSupplierComponent;
  let fixture: ComponentFixture<NewCostumerSupplierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewCostumerSupplierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCostumerSupplierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
