
import { environment } from '../../../environments/environment'

import { InventoryService } from './inventory.service';
import { MockInventoryService } from './mock-inventory.service';

export const providersForDevelopement = [];

export const providersForProduction = [
    { provide: InventoryService, useClass: MockInventoryService },
];

export const providersForEnvironment = environment.production
  ? providersForProduction : providersForDevelopement;
