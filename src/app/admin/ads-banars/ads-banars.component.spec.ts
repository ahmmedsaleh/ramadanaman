import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdsBanarsComponent } from './ads-banars.component';

describe('AdsBanarsComponent', () => {
  let component: AdsBanarsComponent;
  let fixture: ComponentFixture<AdsBanarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdsBanarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdsBanarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
