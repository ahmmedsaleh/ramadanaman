import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficialAgenciesComponent } from './official-agencies.component';

describe('OfficialAgenciesComponent', () => {
  let component: OfficialAgenciesComponent;
  let fixture: ComponentFixture<OfficialAgenciesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfficialAgenciesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficialAgenciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
