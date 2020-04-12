import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttPalceSearchComponent } from './att-palce-search.component';

describe('AttPalceSearchComponent', () => {
  let component: AttPalceSearchComponent;
  let fixture: ComponentFixture<AttPalceSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttPalceSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttPalceSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
