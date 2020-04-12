import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditOfficialAgenciesComponent } from './edit-official-agencies.component';

describe('EditOfficialAgenciesComponent', () => {
  let component: EditOfficialAgenciesComponent;
  let fixture: ComponentFixture<EditOfficialAgenciesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditOfficialAgenciesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditOfficialAgenciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
