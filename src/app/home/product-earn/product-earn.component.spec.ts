import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductEarnComponent } from './product-earn.component';

describe('ProductEarnComponent', () => {
  let component: ProductEarnComponent;
  let fixture: ComponentFixture<ProductEarnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductEarnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductEarnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
