import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./user-auth/login/login.component";
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  {
  component:LoginComponent,
    path:'signin'
  },
  {
    component:HomeComponent,
    path:''
  }
];
//test
//test

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
