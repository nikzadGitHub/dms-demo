import { TestBed } from '@angular/core/testing';

import { OpvtService } from './opvt.service';

describe('OpvtService', () => {
  let service: OpvtService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpvtService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
