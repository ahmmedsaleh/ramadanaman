import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VolunteersNotesComponent } from './volunteers-notes.component';

describe('VolunteersNotesComponent', () => {
  let component: VolunteersNotesComponent;
  let fixture: ComponentFixture<VolunteersNotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VolunteersNotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VolunteersNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
