import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { EquipmentsService } from './equipments.service';


describe('EquipmentsService', () => {
  let service: EquipmentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [EquipmentsService]
    });
    service = TestBed.inject(EquipmentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
