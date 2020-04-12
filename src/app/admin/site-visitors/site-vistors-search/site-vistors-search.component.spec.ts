import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteVistorsSearchComponent } from './site-vistors-search.component';

describe('SiteVistorsSearchComponent', () => {
  let component: SiteVistorsSearchComponent;
  let fixture: ComponentFixture<SiteVistorsSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteVistorsSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteVistorsSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
