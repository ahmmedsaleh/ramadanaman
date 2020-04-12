import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WPsearchComponent } from './wpsearch.component';

describe('WPsearchComponent', () => {
  let component: WPsearchComponent;
  let fixture: ComponentFixture<WPsearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WPsearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WPsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
