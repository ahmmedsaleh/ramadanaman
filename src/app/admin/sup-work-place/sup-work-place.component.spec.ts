import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupWorkPlaceComponent } from './sup-work-place.component';

describe('SupWorkPlaceComponent', () => {
  let component: SupWorkPlaceComponent;
  let fixture: ComponentFixture<SupWorkPlaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupWorkPlaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupWorkPlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
