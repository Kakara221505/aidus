import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EarnmaxCongratulationComponent } from './earnmax-congratulation.component';

describe('EarnmaxCongratulationComponent', () => {
  let component: EarnmaxCongratulationComponent;
  let fixture: ComponentFixture<EarnmaxCongratulationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EarnmaxCongratulationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EarnmaxCongratulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
