import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLoaComponent } from './user-loa/user-loa.component';
import { UserSetupComponent } from './user-setup/user-setup.component';

// export const fallbackPath = 'user';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo:,
  //   pathMatch: 'full',
  // },
  {
    path: 'userloa', component: UserLoaComponent,
  
  },
  {
    path:'unitsetup', component: UserSetupComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class UserRoutingModule { }
