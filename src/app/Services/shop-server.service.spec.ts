import { TestBed } from '@angular/core/testing';

import { ShopServerService } from './shop-server.service';

describe('ShopServerService', () => {
  let service: ShopServerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShopServerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
