import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransparencyAuditreportComponent } from './transparency-auditreport.component';

describe('TransparencyAuditreportComponent', () => {
  let component: TransparencyAuditreportComponent;
  let fixture: ComponentFixture<TransparencyAuditreportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransparencyAuditreportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransparencyAuditreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
