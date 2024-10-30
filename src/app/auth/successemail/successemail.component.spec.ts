import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessemailComponent } from './successemail.component';

describe('SuccessemailComponent', () => {
  let component: SuccessemailComponent;
  let fixture: ComponentFixture<SuccessemailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuccessemailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessemailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
