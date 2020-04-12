import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCountryCityComponent } from './edit-country-city.component';

describe('EditCountryCityComponent', () => {
  let component: EditCountryCityComponent;
  let fixture: ComponentFixture<EditCountryCityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCountryCityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCountryCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
