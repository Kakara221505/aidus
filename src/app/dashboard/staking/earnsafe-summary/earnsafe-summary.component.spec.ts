import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EarnsafeSummaryComponent } from './earnsafe-summary.component';

describe('EarnsafeSummaryComponent', () => {
  let component: EarnsafeSummaryComponent;
  let fixture: ComponentFixture<EarnsafeSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EarnsafeSummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EarnsafeSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
