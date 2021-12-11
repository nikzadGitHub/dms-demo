import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ApiClient } from './api-client.service';

describe('ApiService', () => {
  let service: ApiClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ApiClient]
    });
    service = TestBed.inject(ApiClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
