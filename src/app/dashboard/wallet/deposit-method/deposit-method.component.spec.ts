import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositMethodComponent } from './deposit-method.component';

describe('DepositMethodComponent', () => {
  let component: DepositMethodComponent;
  let fixture: ComponentFixture<DepositMethodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepositMethodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepositMethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
