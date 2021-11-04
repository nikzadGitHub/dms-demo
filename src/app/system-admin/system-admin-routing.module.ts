import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SystemAdminComponent } from './admin/system-admin.component';

const routes: Routes = [
  { path: 'systemadmin', component: SystemAdminComponent },
  { path: '**', redirectTo: 'systemadmin' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class SystemAdminRoutingModule { }
