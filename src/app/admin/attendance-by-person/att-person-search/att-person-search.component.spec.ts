import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttPersonSearchComponent } from './att-person-search.component';

describe('AttPersonSearchComponent', () => {
  let component: AttPersonSearchComponent;
  let fixture: ComponentFixture<AttPersonSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttPersonSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttPersonSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
