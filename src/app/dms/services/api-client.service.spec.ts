import { TestBed } from '@angular/core/testing';

import { ApiClient } from './api-client.service';

describe('ApiService', () => {
  let service: ApiClient;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
