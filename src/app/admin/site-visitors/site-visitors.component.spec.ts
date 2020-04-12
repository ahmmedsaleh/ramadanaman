import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteVisitorsComponent } from './site-visitors.component';

describe('SiteVisitorsComponent', () => {
  let component: SiteVisitorsComponent;
  let fixture: ComponentFixture<SiteVisitorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteVisitorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteVisitorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
