import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OaSearchComponent } from './oa-search.component';

describe('OaSearchComponent', () => {
  let component: OaSearchComponent;
  let fixture: ComponentFixture<OaSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OaSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OaSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
