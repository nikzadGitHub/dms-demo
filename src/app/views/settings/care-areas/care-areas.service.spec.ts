import { TestBed } from '@angular/core/testing';

import { CareAreasService } from './care-areas.service';

describe('CareAreasService', () => {
  let service: CareAreasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CareAreasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
