import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VolunteersReportComponent } from './volunteers-report.component';

describe('VolunteersReportComponent', () => {
  let component: VolunteersReportComponent;
  let fixture: ComponentFixture<VolunteersReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VolunteersReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VolunteersReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
