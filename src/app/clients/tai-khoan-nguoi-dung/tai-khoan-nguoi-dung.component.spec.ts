import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaiKhoanNguoiDungComponent } from './tai-khoan-nguoi-dung.component';

describe('TaiKhoanNguoiDungComponent', () => {
  let component: TaiKhoanNguoiDungComponent;
  let fixture: ComponentFixture<TaiKhoanNguoiDungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaiKhoanNguoiDungComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaiKhoanNguoiDungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
