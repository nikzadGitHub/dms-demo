import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Settings'
    },
    children: [
      //{ path: '', redirectTo: 'opcs' },
      { path: 'agencies', loadChildren: () => import(`./agencies/agencies-routing.module`).then(m => m.AgenciesRoutingModule) ,data: { title: 'Agencies' } },
      { path: 'pg', loadChildren: () => import(`./product-groups/product-groups-routing.module`).then(m => m.ProductGroupsRoutingModule) ,data: { title: 'Product Groups' } },
      { path: 'ca', loadChildren: () => import(`./care-areas/care-areas-routing.module`).then(m => m.CareAreasRoutingModule) ,data: { title: 'Care Areas' } },
      { path: 'manufacturers', loadChildren: () => import(`./manufacturers/manufacturers-routing.module`).then(m => m.ManufacturersRoutingModule) ,data: { title: 'Manufacturers' } },
      { path: 'opcs', loadChildren: () => import(`./opcs/opcs-routing.module`).then(m => m.OpcsRoutingModule) ,data: { title: 'OPC' } },
      { path: 'oct', loadChildren: () => import(`./oct/oct-routing.module`).then(m => m.OctRoutingModule) ,data: { title: 'Opportunity Competitor Types' } },
      { path: 'ofsc', loadChildren: () => import(`./ofsc/ofsc-routing.module`).then(m => m.OfscRoutingModule) ,data: { title: 'Opportunity Funding Sources' } },
      { path: 'ofst', loadChildren: () => import(`./ofst/ofst-routing.module`).then(m => m.OfstRoutingModule) ,data: { title: 'Opportunity Funding Status' } },
      { path: 'opvt', loadChildren: () => import(`./opvt/opvt-routing.module`).then(m => m.OpvtRoutingModule) ,data: { title: 'Opportunity Preferred Vendor Types' } },
      { path: 'os', loadChildren: () => import(`./os/os-routing.module`).then(m => m.OsRoutingModule) ,data: { title: 'Opportunity Status' } },
      { path: 'ot', loadChildren: () => import(`./ot/ot-routing.module`).then(m => m.OtRoutingModule) ,data: { title: 'Opportunity Types' } },
    ]
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  
})
export class SettingsRoutingModule {}
