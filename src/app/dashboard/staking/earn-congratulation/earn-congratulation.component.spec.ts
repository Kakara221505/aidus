import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EarnCongratulationComponent } from './earn-congratulation.component';

describe('EarnCongratulationComponent', () => {
  let component: EarnCongratulationComponent;
  let fixture: ComponentFixture<EarnCongratulationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EarnCongratulationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EarnCongratulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
