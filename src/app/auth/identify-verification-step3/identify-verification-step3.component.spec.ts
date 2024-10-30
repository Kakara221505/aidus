import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentifyVerificationStep3Component } from './identify-verification-step3.component';

describe('IdentifyVerificationStep3Component', () => {
  let component: IdentifyVerificationStep3Component;
  let fixture: ComponentFixture<IdentifyVerificationStep3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdentifyVerificationStep3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdentifyVerificationStep3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
