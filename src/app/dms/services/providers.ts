
import { environment } from '../../../environments/environment'

import { InventoryService } from './inventory.service';
import { MockInventoryService } from './mock-inventory.service';
import { BookingEntityService } from './booking-entity.service';
import { MockBookingEntityService } from './mock-booking-entity.service';

export const providersForDevelopement = [];

export const providersForProduction = [
  { provide: BookingEntityService, useClass: MockBookingEntityService },
  { provide: InventoryService, useClass: MockInventoryService },
];

export const providersForEnvironment = environment.production
  ? providersForProduction : providersForDevelopement;
