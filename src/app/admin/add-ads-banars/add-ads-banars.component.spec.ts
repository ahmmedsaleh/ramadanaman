import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAdsBanarsComponent } from './add-ads-banars.component';

describe('AddAdsBanarsComponent', () => {
  let component: AddAdsBanarsComponent;
  let fixture: ComponentFixture<AddAdsBanarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAdsBanarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAdsBanarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
