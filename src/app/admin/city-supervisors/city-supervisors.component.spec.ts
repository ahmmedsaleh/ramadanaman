import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CitySupervisorsComponent } from './city-supervisors.component';

describe('CitySupervisorsComponent', () => {
  let component: CitySupervisorsComponent;
  let fixture: ComponentFixture<CitySupervisorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CitySupervisorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CitySupervisorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
