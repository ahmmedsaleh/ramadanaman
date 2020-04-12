import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCitySupervisorsComponent } from './add-city-supervisors.component';

describe('AddCitySupervisorsComponent', () => {
  let component: AddCitySupervisorsComponent;
  let fixture: ComponentFixture<AddCitySupervisorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCitySupervisorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCitySupervisorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
