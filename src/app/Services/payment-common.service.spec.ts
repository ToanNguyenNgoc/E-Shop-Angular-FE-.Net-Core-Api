import { TestBed } from '@angular/core/testing';

import { PaymentCommonService } from './payment-common.service';

describe('PaymentCommonService', () => {
  let service: PaymentCommonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaymentCommonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
