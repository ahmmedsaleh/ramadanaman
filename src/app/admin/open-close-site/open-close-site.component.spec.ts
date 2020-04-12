import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenCloseSiteComponent } from './open-close-site.component';

describe('OpenCloseSiteComponent', () => {
  let component: OpenCloseSiteComponent;
  let fixture: ComponentFixture<OpenCloseSiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenCloseSiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenCloseSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
