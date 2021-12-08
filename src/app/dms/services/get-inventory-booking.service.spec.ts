import { TestBed } from '@angular/core/testing';

import { GetInventoryBookingService } from './get-inventory-booking.service';

describe('GetInventoryBookingService', () => {
  let service: GetInventoryBookingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetInventoryBookingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
