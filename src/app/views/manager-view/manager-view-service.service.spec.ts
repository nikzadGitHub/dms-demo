import { TestBed } from '@angular/core/testing';

import { ManagerViewServiceService } from './manager-view-service.service';

describe('ManagerViewServiceService', () => {
  let service: ManagerViewServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManagerViewServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
