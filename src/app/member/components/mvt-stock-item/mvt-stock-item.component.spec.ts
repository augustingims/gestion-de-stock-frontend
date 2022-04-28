import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MvtStockItemComponent } from './mvt-stock-item.component';

describe('MvtStockItemComponent', () => {
  let component: MvtStockItemComponent;
  let fixture: ComponentFixture<MvtStockItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MvtStockItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MvtStockItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
