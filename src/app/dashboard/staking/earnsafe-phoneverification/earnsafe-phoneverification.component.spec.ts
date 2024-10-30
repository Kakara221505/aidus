import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EarnsafePhoneverificationComponent } from './earnsafe-phoneverification.component';

describe('EarnsafePhoneverificationComponent', () => {
  let component: EarnsafePhoneverificationComponent;
  let fixture: ComponentFixture<EarnsafePhoneverificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EarnsafePhoneverificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EarnsafePhoneverificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
