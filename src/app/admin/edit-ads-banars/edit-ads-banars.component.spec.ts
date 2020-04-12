import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAdsBanarsComponent } from './edit-ads-banars.component';

describe('EditAdsBanarsComponent', () => {
  let component: EditAdsBanarsComponent;
  let fixture: ComponentFixture<EditAdsBanarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAdsBanarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAdsBanarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
