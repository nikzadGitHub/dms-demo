import { environment } from '../../../environments/environment'
import {ApiClient} from './api-client.service';
import { InventoryService } from './inventory.service';
import { MockInventoryService } from './mock-inventory.service';
import { BookingEntityService } from './booking-entity.service';
import { MockBookingEntityService } from './mock-booking-entity.service';
import {EquipmentsService} from './equipments.service';
import {MockEquipmentsService} from './mock-equipments.service';

export const providersForDevelopment = [
  ApiClient,
  MockBookingEntityService,
  MockInventoryService,
  MockEquipmentsService,
];

/**
 * Replaces our Mock-services, to use Real-Service classes for Production.
 */
export const providersForProduction = [
  ApiClient,
  { provide: MockBookingEntityService, useClass: BookingEntityService },
  { provide: MockInventoryService, useClass: InventoryService },
  { provide: MockEquipmentsService, useClass: EquipmentsService },
];

export const providersForEnvironment = environment.production
  ? providersForProduction : providersForDevelopment;
