import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentifyVerificationStep5Component } from './identify-verification-step5.component';

describe('IdentifyVerificationStep5Component', () => {
  let component: IdentifyVerificationStep5Component;
  let fixture: ComponentFixture<IdentifyVerificationStep5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdentifyVerificationStep5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdentifyVerificationStep5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
