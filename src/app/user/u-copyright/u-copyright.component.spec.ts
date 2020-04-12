import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UCopyrightComponent } from './u-copyright.component';

describe('UCopyrightComponent', () => {
  let component: UCopyrightComponent;
  let fixture: ComponentFixture<UCopyrightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UCopyrightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UCopyrightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
