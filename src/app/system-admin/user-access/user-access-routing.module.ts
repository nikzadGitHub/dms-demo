import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserAccessSetupComponent } from './user-access-setup.component';

const routes: Routes = [
  {
    path: '', component: UserAccessSetupComponent,
    data: {
      title: 'User Access Setup'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class UserAccessRoutingModule { }
