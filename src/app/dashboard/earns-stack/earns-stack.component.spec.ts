import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EarnsStackComponent } from './earns-stack.component';

describe('EarnsStackComponent', () => {
  let component: EarnsStackComponent;
  let fixture: ComponentFixture<EarnsStackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EarnsStackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EarnsStackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
