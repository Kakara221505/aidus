import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentifyVerificationStep2Component } from './identify-verification-step2.component';

describe('IdentifyVerificationStep2Component', () => {
  let component: IdentifyVerificationStep2Component;
  let fixture: ComponentFixture<IdentifyVerificationStep2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdentifyVerificationStep2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdentifyVerificationStep2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
