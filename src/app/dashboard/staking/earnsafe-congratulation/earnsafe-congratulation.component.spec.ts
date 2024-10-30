import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EarnsafeCongratulationComponent } from './earnsafe-congratulation.component';

describe('EarnsafeCongratulationComponent', () => {
  let component: EarnsafeCongratulationComponent;
  let fixture: ComponentFixture<EarnsafeCongratulationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EarnsafeCongratulationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EarnsafeCongratulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
