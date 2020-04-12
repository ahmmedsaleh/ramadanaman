import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { attSearchComponent } from './attsearch.component';

describe('attSearchComponent', () => {
  let component: attSearchComponent;
  let fixture: ComponentFixture<attSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ attSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(attSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
