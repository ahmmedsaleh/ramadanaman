import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOfficialAgenciesComponent } from './add-official-agencies.component';

describe('AddOfficialAgenciesComponent', () => {
  let component: AddOfficialAgenciesComponent;
  let fixture: ComponentFixture<AddOfficialAgenciesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddOfficialAgenciesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOfficialAgenciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
