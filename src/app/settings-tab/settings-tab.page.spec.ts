import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsTabPage } from './settings-tab.page';

describe('SettingsTabPage', () => {
  let component: SettingsTabPage;
  let fixture: ComponentFixture<SettingsTabPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsTabPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsTabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
