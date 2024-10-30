import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EarnmaxPhoneverificationComponent } from './earnmax-phoneverification.component';

describe('EarnmaxPhoneverificationComponent', () => {
  let component: EarnmaxPhoneverificationComponent;
  let fixture: ComponentFixture<EarnmaxPhoneverificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EarnmaxPhoneverificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EarnmaxPhoneverificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
