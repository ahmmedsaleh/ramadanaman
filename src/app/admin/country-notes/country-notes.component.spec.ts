import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryNotesComponent } from './country-notes.component';

describe('CountryNotesComponent', () => {
  let component: CountryNotesComponent;
  let fixture: ComponentFixture<CountryNotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountryNotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
