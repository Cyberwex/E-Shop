import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './ecommerce/register/register.component';
import { LoginComponent } from './ecommerce/login/login.component';
import { ProfileComponent } from './ecommerce/profile/profile.component';
import {HomeComponent} from "./ecommerce/home/home.component";
const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
