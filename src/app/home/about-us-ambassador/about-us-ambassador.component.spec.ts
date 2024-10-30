import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsAmbassadorComponent } from './about-us-ambassador.component';

describe('AboutUsAmbassadorComponent', () => {
  let component: AboutUsAmbassadorComponent;
  let fixture: ComponentFixture<AboutUsAmbassadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutUsAmbassadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutUsAmbassadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
