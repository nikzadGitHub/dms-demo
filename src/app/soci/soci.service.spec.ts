import { TestBed } from '@angular/core/testing';

import { SociService } from './soci.service';

describe('SociService', () => {
  let service: SociService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SociService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
