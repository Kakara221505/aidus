import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EarnmaxVerificationComponent } from './earnmax-verification.component';

describe('EarnmaxVerificationComponent', () => {
  let component: EarnmaxVerificationComponent;
  let fixture: ComponentFixture<EarnmaxVerificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EarnmaxVerificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EarnmaxVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
