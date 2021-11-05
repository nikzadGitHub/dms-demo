import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';

export const fallbackPath = 'user';

const routes: Routes = [
  {
    path: '',
    redirectTo: fallbackPath,
    pathMatch: 'full',
  },
  {
    path: 'user', component: UserComponent,
    data: {
      title: 'Add User'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class UserRoutingModule { }
