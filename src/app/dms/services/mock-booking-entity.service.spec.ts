import { TestBed } from '@angular/core/testing';

import { MockInventoryService } from './mock-inventory.service';

describe('MockInventoryService', () => {
  let service: MockInventoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MockInventoryService]
    });
    service = TestBed.inject(MockInventoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
