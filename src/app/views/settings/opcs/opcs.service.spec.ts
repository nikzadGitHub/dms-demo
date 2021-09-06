import { TestBed } from '@angular/core/testing';

import { OpcsService } from './opcs.service';

describe('OpcsService', () => {
  let service: OpcsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpcsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
