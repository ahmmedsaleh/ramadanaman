import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VolunteersCounterComponent } from './volunteers-counter.component';

describe('VolunteersCounterComponent', () => {
  let component: VolunteersCounterComponent;
  let fixture: ComponentFixture<VolunteersCounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VolunteersCounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VolunteersCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
