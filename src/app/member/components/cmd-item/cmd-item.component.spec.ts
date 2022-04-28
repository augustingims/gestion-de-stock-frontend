import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmdItemComponent } from './cmd-item.component';

describe('CmdItemComponent', () => {
  let component: CmdItemComponent;
  let fixture: ComponentFixture<CmdItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmdItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CmdItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
