import { TestBed } from '@angular/core/testing';

import { CartCommonService } from './cart-common.service';

describe('CartCommonService', () => {
  let service: CartCommonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartCommonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
