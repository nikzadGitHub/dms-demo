// Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// Alert Component
import { AlertModule } from 'ngx-bootstrap/alert';

// Modal Component
import { ModalModule } from 'ngx-bootstrap/modal';

// Notifications Routing
import { SettingsRoutingModule } from './settings-routing.module';
import { ProductGroupsModule } from './product-groups/product-groups.module';
import { AgenciesModule } from './agencies/agencies.module';
import { CareAreasModule } from './care-areas/care-areas.module';
import { ManufacturersModule } from './manufacturers/manufacturers.module';
import { OpcsModule } from './opcs/opcs.module';
import { OctModule } from './oct/oct.module';
import { OfscModule } from './ofsc/ofsc.module';
import { OfstModule } from './ofst/ofst.module';
import { OpvtModule } from './opvt/opvt.module';
import { OsModule } from './os/os.module';
import { OtModule } from './ot/ot.module';

@NgModule({
  imports: [
    CommonModule,
    SettingsRoutingModule,
    AlertModule.forRoot(),
    ModalModule.forRoot(),
    ProductGroupsModule,
    AgenciesModule,
    CareAreasModule,
    ManufacturersModule,
    OpcsModule,
    OctModule,
    OfscModule,
    OfstModule,
    OpvtModule,
    OsModule,
    OtModule
  ]
})
export class SettingsModule { }
