import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';

import { ShowusersComponent } from './showusers/showusers.component';

const routes: Routes = [

{
  path:'',
  redirectTo:'navbar',
  pathMatch:'full'
},
{
  path:'navbar',
  component:NavbarComponent
},
{
  path:'home',
  component:HomeComponent
},
{
  path:'login',
  component:LoginComponent
},
{
  path:'register',
  component:RegisterComponent
},{
  path:"navbar",
  component:NavbarComponent
},
{
path:"about",
component:AboutComponent

},{
  path:'showuser',
  component:ShowusersComponent
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
