import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCountryCityComponent } from './add-country-city.component';

describe('AddCountryCityComponent', () => {
  let component: AddCountryCityComponent;
  let fixture: ComponentFixture<AddCountryCityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCountryCityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCountryCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
