import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithdrawSummaryComponent } from './withdraw-summary.component';

describe('WithdrawSummaryComponent', () => {
  let component: WithdrawSummaryComponent;
  let fixture: ComponentFixture<WithdrawSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WithdrawSummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WithdrawSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
