import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MvtStockArticleComponent } from './mvt-stock-article.component';

describe('MvtStockArticleComponent', () => {
  let component: MvtStockArticleComponent;
  let fixture: ComponentFixture<MvtStockArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MvtStockArticleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MvtStockArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
