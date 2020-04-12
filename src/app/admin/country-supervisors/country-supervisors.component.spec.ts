import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountrySupervisorsComponent } from './country-supervisors.component';

describe('CountrySupervisorsComponent', () => {
  let component: CountrySupervisorsComponent;
  let fixture: ComponentFixture<CountrySupervisorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountrySupervisorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountrySupervisorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
