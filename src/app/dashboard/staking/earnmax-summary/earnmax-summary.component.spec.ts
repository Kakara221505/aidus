import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EarnmaxSummaryComponent } from './earnmax-summary.component';

describe('EarnmaxSummaryComponent', () => {
  let component: EarnmaxSummaryComponent;
  let fixture: ComponentFixture<EarnmaxSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EarnmaxSummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EarnmaxSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
