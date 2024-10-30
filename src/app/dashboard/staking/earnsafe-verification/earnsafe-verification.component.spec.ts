import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EarnsafeVerificationComponent } from './earnsafe-verification.component';

describe('EarnsafeVerificationComponent', () => {
  let component: EarnsafeVerificationComponent;
  let fixture: ComponentFixture<EarnsafeVerificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EarnsafeVerificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EarnsafeVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
