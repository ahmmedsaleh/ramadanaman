import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAdminsUserComponent } from './edit-admins-user.component';

describe('EditUserComponent', () => {
  let component: EditAdminsUserComponent;
  let fixture: ComponentFixture<EditAdminsUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAdminsUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAdminsUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
