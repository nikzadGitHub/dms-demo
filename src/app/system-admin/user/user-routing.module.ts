import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLoaComponent } from './user-loa/user-loa.component';

// export const fallbackPath = 'user';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo:,
  //   pathMatch: 'full',
  // },
  {
    path: 'userloa', component: UserLoaComponent,
  
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class UserRoutingModule { }
