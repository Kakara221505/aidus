import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductEarnmaxComponent } from './product-earnmax.component';

describe('ProductEarnmaxComponent', () => {
  let component: ProductEarnmaxComponent;
  let fixture: ComponentFixture<ProductEarnmaxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductEarnmaxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductEarnmaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
