/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TimKiemComponent } from './tim-kiem.component';

describe('TimKiemComponent', () => {
  let component: TimKiemComponent;
  let fixture: ComponentFixture<TimKiemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimKiemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimKiemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
