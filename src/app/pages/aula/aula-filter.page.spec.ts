import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AulaFilterPage } from './aula-filter.page';

describe('SearchFilterPage', () => {
  let component: AulaFilterPage;
  let fixture: ComponentFixture<AulaFilterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AulaFilterPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AulaFilterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
