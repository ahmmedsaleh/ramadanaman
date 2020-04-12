import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCitySupervisorsComponent } from './edit-city-supervisors.component';

describe('EditCitySupervisorsComponent', () => {
  let component: EditCitySupervisorsComponent;
  let fixture: ComponentFixture<EditCitySupervisorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCitySupervisorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCitySupervisorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
