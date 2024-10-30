import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashKycComponent } from './dash-kyc.component';

describe('DashKycComponent', () => {
  let component: DashKycComponent;
  let fixture: ComponentFixture<DashKycComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashKycComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashKycComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
