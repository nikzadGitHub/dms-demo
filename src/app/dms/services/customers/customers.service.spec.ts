import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { CustomersService } from './customers.service';

describe('CustomersService', () => {
  let service: CustomersService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ]
    });
    service = TestBed.inject(CustomersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
