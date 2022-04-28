import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MvtStockListComponent } from './mvt-stock-list.component';

describe('MvtStockListComponent', () => {
  let component: MvtStockListComponent;
  let fixture: ComponentFixture<MvtStockListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MvtStockListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MvtStockListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
