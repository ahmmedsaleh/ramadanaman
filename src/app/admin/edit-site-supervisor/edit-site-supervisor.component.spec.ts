import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSiteSupervisorComponent } from './edit-site-supervisor.component';

describe('EditSiteSupervisorComponent', () => {
  let component: EditSiteSupervisorComponent;
  let fixture: ComponentFixture<EditSiteSupervisorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditSiteSupervisorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSiteSupervisorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
