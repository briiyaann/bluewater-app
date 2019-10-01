import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaPage } from './spa.page';

describe('SpaPage', () => {
  let component: SpaPage;
  let fixture: ComponentFixture<SpaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
