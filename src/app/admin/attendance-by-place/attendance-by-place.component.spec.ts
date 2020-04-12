import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendanceByPlaceComponent } from './attendance-by-place.component';

describe('AttendanceByPlaceComponent', () => {
  let component: AttendanceByPlaceComponent;
  let fixture: ComponentFixture<AttendanceByPlaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttendanceByPlaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendanceByPlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
