import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCartSuccessComponent } from './add-cart-success.component';

describe('AddCartSuccessComponent', () => {
  let component: AddCartSuccessComponent;
  let fixture: ComponentFixture<AddCartSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCartSuccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCartSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
