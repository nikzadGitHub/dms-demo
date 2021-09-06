import { TestBed } from '@angular/core/testing';

import { OfstService } from './ofst.service';

describe('OfstService', () => {
  let service: OfstService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OfstService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
