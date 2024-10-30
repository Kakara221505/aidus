import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashNavAmbessdorComponent } from './dash-nav-ambessdor.component';

describe('DashNavAmbessdorComponent', () => {
  let component: DashNavAmbessdorComponent;
  let fixture: ComponentFixture<DashNavAmbessdorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashNavAmbessdorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashNavAmbessdorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
