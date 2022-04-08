import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user/user.component';
import { UserPipe } from '../user.pipe';
import {NgxPaginationModule} from "ngx-pagination";
import { OneUserComponent } from './one-user/one-user.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    UserComponent,
    UserPipe,
    OneUserComponent
  ],
    imports: [
        CommonModule,
        UserRoutingModule,
        NgxPaginationModule,
        FormsModule
    ]
})
export class UserModule { }
