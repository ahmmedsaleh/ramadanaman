import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMembersVolunteersComponent } from './edit-members-volunteers.component';

describe('EditMembersVolunteersComponent', () => {
  let component: EditMembersVolunteersComponent;
  let fixture: ComponentFixture<EditMembersVolunteersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditMembersVolunteersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMembersVolunteersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
