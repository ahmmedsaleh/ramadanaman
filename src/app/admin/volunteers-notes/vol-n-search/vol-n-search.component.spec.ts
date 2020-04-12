import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VolNSearchComponent } from './vol-n-search.component';

describe('VolNSearchComponent', () => {
  let component: VolNSearchComponent;
  let fixture: ComponentFixture<VolNSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VolNSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VolNSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
