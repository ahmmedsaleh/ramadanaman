import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemSearchComponent } from './mem-search.component';

describe('MemSearchComponent', () => {
  let component: MemSearchComponent;
  let fixture: ComponentFixture<MemSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
