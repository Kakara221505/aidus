import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadIdendificationComponent } from './upload-idendification.component';

describe('UploadIdendificationComponent', () => {
  let component: UploadIdendificationComponent;
  let fixture: ComponentFixture<UploadIdendificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadIdendificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadIdendificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
