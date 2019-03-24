import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TvShowsTabPage } from './tv-shows-tab.page';

describe('TvShowsTabPage', () => {
  let component: TvShowsTabPage;
  let fixture: ComponentFixture<TvShowsTabPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TvShowsTabPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvShowsTabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
