import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductEarnsafeComponent } from './product-earnsafe.component';

describe('ProductEarnsafeComponent', () => {
  let component: ProductEarnsafeComponent;
  let fixture: ComponentFixture<ProductEarnsafeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductEarnsafeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductEarnsafeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
