import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { BookingEntityService } from './booking-entity.service';


describe('BookingEntityService', () => {
  let service: BookingEntityService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(BookingEntityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
