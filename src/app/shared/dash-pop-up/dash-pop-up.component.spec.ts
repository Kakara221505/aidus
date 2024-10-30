import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashPopUpComponent } from './dash-pop-up.component';

describe('DashPopUpComponent', () => {
  let component: DashPopUpComponent;
  let fixture: ComponentFixture<DashPopUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashPopUpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
