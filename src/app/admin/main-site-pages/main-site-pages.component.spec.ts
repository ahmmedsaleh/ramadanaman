import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainSitePagesComponent } from './main-site-pages.component';

describe('MainSitePagesComponent', () => {
  let component: MainSitePagesComponent;
  let fixture: ComponentFixture<MainSitePagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainSitePagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainSitePagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
