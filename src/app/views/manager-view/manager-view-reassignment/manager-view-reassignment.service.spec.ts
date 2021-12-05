import { TestBed } from '@angular/core/testing';

import { ManagerViewReassignmentService } from './manager-view-reassignment.service';

describe('ManagerViewReassignmentService', () => {
  let service: ManagerViewReassignmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManagerViewReassignmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
