import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteOptionsComponent } from './site-options.component';

describe('SiteOptionsComponent', () => {
  let component: SiteOptionsComponent;
  let fixture: ComponentFixture<SiteOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
