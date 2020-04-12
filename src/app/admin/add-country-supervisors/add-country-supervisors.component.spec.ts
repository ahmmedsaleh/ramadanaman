import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCountrySupervisorsComponent } from './add-country-supervisors.component';

describe('AddCountrySupervisorsComponent', () => {
  let component: AddCountrySupervisorsComponent;
  let fixture: ComponentFixture<AddCountrySupervisorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCountrySupervisorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCountrySupervisorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
