import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddSystemAdminComponent } from './add-system-admin/add-system-admin.component';
import { SystemAdminComponent } from './system-admin.component';

const routes: Routes = [
  {
    path: "systemadmin",
    redirectTo: "/systemadmin",
    pathMatch: "full",
  },
  {
    path: '', component: SystemAdminComponent,
    data: {
      title: 'System Admin'
    }
  },
  {
    path: 'add-system-admin',
    component: AddSystemAdminComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class SystemAdminRoutingModule { }
