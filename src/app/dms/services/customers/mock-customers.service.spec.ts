import { TestBed } from '@angular/core/testing';

import { MockCustomersService } from './mock-customers.service';

describe('MockCustomersService', () => {
  let service: MockCustomersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockCustomersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
