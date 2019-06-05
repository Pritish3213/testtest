import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'public',
    loadChildren: './login-register/login-register.module#LoginRegisterModule'
  },
  {
    path: '',
    redirectTo: 'public/login',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/public/login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
