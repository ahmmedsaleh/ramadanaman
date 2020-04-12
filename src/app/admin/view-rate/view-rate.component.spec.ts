import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRateComponent } from './view-rate.component';

describe('ViewRateComponent', () => {
  let component: ViewRateComponent;
  let fixture: ComponentFixture<ViewRateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewRateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
