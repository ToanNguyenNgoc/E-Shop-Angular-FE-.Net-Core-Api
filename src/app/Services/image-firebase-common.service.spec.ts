import { TestBed } from '@angular/core/testing';

import { ImageFirebaseCommonService } from './image-firebase-common.service';

describe('ImageFirebaseCommonService', () => {
  let service: ImageFirebaseCommonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImageFirebaseCommonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
