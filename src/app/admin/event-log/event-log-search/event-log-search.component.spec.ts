import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventLogSearchComponent } from './event-log-search.component';

describe('EventLogSearchComponent', () => {
  let component: EventLogSearchComponent;
  let fixture: ComponentFixture<EventLogSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventLogSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventLogSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
