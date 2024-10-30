import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EarnPhoneverificationComponent } from './earn-phoneverification.component';

describe('EarnPhoneverificationComponent', () => {
  let component: EarnPhoneverificationComponent;
  let fixture: ComponentFixture<EarnPhoneverificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EarnPhoneverificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EarnPhoneverificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
