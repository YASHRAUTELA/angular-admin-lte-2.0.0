import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Get Started'
    },
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path:'login',
        component:LoginComponent,
        data:{
          customLayout:true
        }
      },
      {
        path:'forgot-password',
        component:ForgotPasswordComponent,
        data:{
          customLayout:true
        }
      },
      {
        path:'reset-password',
        component:ResetPasswordComponent,
        data:{
          customLayout:true
        }
      }
    ]
  }
];

@NgModule({
  // imports: [RouterModule.forRoot(routes, { useHash: true })],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
