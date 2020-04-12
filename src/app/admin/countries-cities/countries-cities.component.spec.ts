import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountriesCitiesComponent } from './countries-cities.component';

describe('CountriesCitiesComponent', () => {
  let component: CountriesCitiesComponent;
  let fixture: ComponentFixture<CountriesCitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountriesCitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountriesCitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
