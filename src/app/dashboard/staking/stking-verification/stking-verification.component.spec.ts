import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StkingVerificationComponent } from './stking-verification.component';

describe('StkingVerificationComponent', () => {
  let component: StkingVerificationComponent;
  let fixture: ComponentFixture<StkingVerificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StkingVerificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StkingVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
