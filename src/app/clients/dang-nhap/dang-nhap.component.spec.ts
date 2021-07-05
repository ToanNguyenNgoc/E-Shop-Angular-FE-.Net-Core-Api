import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DangNhapComponent } from './dang-nhap.component';

describe('DangNhapComponent', () => {
  let component: DangNhapComponent;
  let fixture: ComponentFixture<DangNhapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DangNhapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DangNhapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
