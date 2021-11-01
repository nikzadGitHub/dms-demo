import { TestBed } from '@angular/core/testing';

import { MockBookingService } from './mock-booking.service';

describe('MockInventoryService', () => {
  let service: MockBookingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockBookingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
