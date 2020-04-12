import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditWorkplacesComponent } from './edit-workplaces.component';

describe('EditWorkplacesComponent', () => {
  let component: EditWorkplacesComponent;
  let fixture: ComponentFixture<EditWorkplacesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditWorkplacesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditWorkplacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
