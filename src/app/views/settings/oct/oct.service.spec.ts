import { TestBed } from '@angular/core/testing';

import { OctService } from './oct.service';

describe('OctService', () => {
  let service: OctService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OctService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
