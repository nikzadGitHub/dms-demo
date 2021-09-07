import { TestBed } from '@angular/core/testing';

import { OfscService } from './ofsc.service';

describe('OfscService', () => {
  let service: OfscService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OfscService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
