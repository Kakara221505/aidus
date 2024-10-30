import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EarnSummaryComponent } from './earn-summary.component';

describe('EarnSummaryComponent', () => {
  let component: EarnSummaryComponent;
  let fixture: ComponentFixture<EarnSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EarnSummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EarnSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
