import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageUploadFirebaseComponent } from './image-upload-firebase.component';

describe('ImageUploadFirebaseComponent', () => {
  let component: ImageUploadFirebaseComponent;
  let fixture: ComponentFixture<ImageUploadFirebaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageUploadFirebaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageUploadFirebaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
