import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetamaskPayComponent } from './metamask-pay.component';

describe('MetamaskPayComponent', () => {
  let component: MetamaskPayComponent;
  let fixture: ComponentFixture<MetamaskPayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MetamaskPayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MetamaskPayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
