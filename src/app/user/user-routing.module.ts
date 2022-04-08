import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OneUserComponent } from './one-user/one-user.component';
import {UserComponent} from "./user/user.component";

const routes: Routes = [
  {path: '', children: [
      {path: '', component: UserComponent},
      // {path: 'one/:id', component: OneUserComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
