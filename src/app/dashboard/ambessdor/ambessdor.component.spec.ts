import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmbessdorComponent } from './ambessdor.component';

describe('AmbessdorComponent', () => {
  let component: AmbessdorComponent;
  let fixture: ComponentFixture<AmbessdorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmbessdorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmbessdorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
