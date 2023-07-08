import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { NomineeComponent } from './nominee/nominee.component';
import { GuardianDetailsComponent } from './guardian-details/guardian-details.component';
import { FormGridComponent } from './form-grid/form-grid.component';
const routes: Routes = [

  {
    path: 'form-grid',
    component: FormGridComponent
  },
  {
    path: 'users',
    component: UsersComponent
  },
  {
    path: '',
    redirectTo: 'users',
    pathMatch: 'full'
  },
  {
    path: 'nominee',
    component: NomineeComponent
  },
  {
    path: 'guardian-details',
    component: GuardianDetailsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
