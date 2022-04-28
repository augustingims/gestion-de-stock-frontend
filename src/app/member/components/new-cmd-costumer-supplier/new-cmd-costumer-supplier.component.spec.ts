import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCmdCostumerSupplierComponent } from './new-cmd-costumer-supplier.component';

describe('NewCmdCostumerSupplierComponent', () => {
  let component: NewCmdCostumerSupplierComponent;
  let fixture: ComponentFixture<NewCmdCostumerSupplierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewCmdCostumerSupplierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCmdCostumerSupplierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
