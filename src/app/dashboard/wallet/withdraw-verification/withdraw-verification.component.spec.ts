import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithdrawVerificationComponent } from './withdraw-verification.component';

describe('WithdrawVerificationComponent', () => {
  let component: WithdrawVerificationComponent;
  let fixture: ComponentFixture<WithdrawVerificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WithdrawVerificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WithdrawVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
