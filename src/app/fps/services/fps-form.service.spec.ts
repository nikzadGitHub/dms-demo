import { TestBed } from '@angular/core/testing';

import { FpsFormService } from './fps-form.service';

describe('FpsFormService', () => {
  let service: FpsFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FpsFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
