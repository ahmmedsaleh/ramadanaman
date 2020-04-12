import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCountrySupervisorsComponent } from './edit-country-supervisors.component';

describe('EditCountrySupervisorsComponent', () => {
  let component: EditCountrySupervisorsComponent;
  let fixture: ComponentFixture<EditCountrySupervisorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCountrySupervisorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCountrySupervisorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
