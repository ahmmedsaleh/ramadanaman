import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupSearchComponent } from './sup-search.component';

describe('SupSearchComponent', () => {
  let component: SupSearchComponent;
  let fixture: ComponentFixture<SupSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
