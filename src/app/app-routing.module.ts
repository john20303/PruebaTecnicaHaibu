import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { OneUserComponent } from './user/one-user/one-user.component';

const routes: Routes = [
  {path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule)},
  {path: 'one/:id', component: OneUserComponent},
  {path: '**', redirectTo: 'user', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
