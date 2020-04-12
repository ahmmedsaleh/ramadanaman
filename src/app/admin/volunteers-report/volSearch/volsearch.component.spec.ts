import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { volSearchComponent } from './volsearch.component';

describe('volSearchComponent', () => {
  let component: volSearchComponent;
  let fixture: ComponentFixture<volSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ volSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(volSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
