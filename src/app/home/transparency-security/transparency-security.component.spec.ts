import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransparencySecurityComponent } from './transparency-security.component';

describe('TransparencySecurityComponent', () => {
  let component: TransparencySecurityComponent;
  let fixture: ComponentFixture<TransparencySecurityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransparencySecurityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransparencySecurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
