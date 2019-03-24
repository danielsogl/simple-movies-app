import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesTabPage } from './movies-tab.page';

describe('MoviesTabPage', () => {
  let component: MoviesTabPage;
  let fixture: ComponentFixture<MoviesTabPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviesTabPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesTabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
