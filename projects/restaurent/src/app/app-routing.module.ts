import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { MaterialComponent } from './components/material/material.component';
import { RestaurentdashComponent } from './components/restaurentdash/restaurentdash.component';
import { SignupComponent } from './components/signup/signup.component';
// import { SharedComponent } from './components/shared/shared.component';

const routes: Routes = [
  {path:'', redirectTo:'login',pathMatch:'full'},
  // {path:'**',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'Material',component:MaterialComponent},
  {path:'restaurent',component:RestaurentdashComponent},
  {path:'signup',component:SignupComponent},
  // {path:'shared',component:SharedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
