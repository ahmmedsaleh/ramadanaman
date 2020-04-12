import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SitesSupervisorsComponent } from './sites-supervisors.component';

describe('SitesSupervisorsComponent', () => {
  let component: SitesSupervisorsComponent;
  let fixture: ComponentFixture<SitesSupervisorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SitesSupervisorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SitesSupervisorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
