import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentifyVerificationStep4Component } from './identify-verification-step4.component';

describe('IdentifyVerificationStep4Component', () => {
  let component: IdentifyVerificationStep4Component;
  let fixture: ComponentFixture<IdentifyVerificationStep4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdentifyVerificationStep4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdentifyVerificationStep4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
