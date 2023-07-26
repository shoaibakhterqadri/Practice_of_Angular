import { Routes,RouterModule } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { LoginComponent } from './user/login/login.component';
import { SignupComponent } from './user/signup/signup.component';

const routes:Routes=[
    {path:'login',component:LoginComponent},
    {path:'signup',component:SignupComponent},

];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule],
})
export class AppRoutingModule{}

