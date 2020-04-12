import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VolCounSearchComponent } from './vol-coun-search.component';

describe('VolCounSearchComponent', () => {
  let component: VolCounSearchComponent;
  let fixture: ComponentFixture<VolCounSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VolCounSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VolCounSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
