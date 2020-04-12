import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MembersVolunteersComponent } from './members-volunteers.component';

describe('MembersVolunteersComponent', () => {
  let component: MembersVolunteersComponent;
  let fixture: ComponentFixture<MembersVolunteersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MembersVolunteersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MembersVolunteersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
