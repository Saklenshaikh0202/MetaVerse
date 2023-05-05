import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './pages/auth/guards/auth.guard';
import { NoAuthGuard } from './pages/auth/guards/noAuth.guard';
import { LayoutsComponent } from './pages/layouts/layouts.component';
import { UnityComponent } from './pages/layouts/unity/unity.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
  {
    path: '',
    canActivate: [NoAuthGuard],
    canActivateChild: [NoAuthGuard],
    component: LayoutsComponent,
    data: {
      layout: 'empty'
    },
    children: [
      { path: 'login', loadChildren: () => import('./pages/modules/login/login.module').then((m) => m.LoginModule) },
      { path: 'registrationhomepage', loadChildren: () => import('./pages/modules/registration/registrationhomepage/registrationhomepage.module').then(m => m.RegistrationhomepageModule) },
      { path: 'tearmsandconditions', loadChildren: () => import('./pages/modules/registration/tearmsandconditions/tearmsandconditions.module').then(m => m.TearmsandconditionsModule) },
      { path: 'noncustregistration', loadChildren: () => import('./pages/modules/registration/noncustregistration/noncustregistration.module').then(m => m.NoncustregistrationModule) },
      { path: 'custregistration', loadChildren: () => import('./pages/modules/registration/custregistration/custregistration.module').then(m => m.CustregistrationModule) },
      { path: 'registrationsteps', loadChildren: () => import('./pages/modules/registration/registrationsteps/registrationsteps.module').then(m => m.RegistrationstepsModule) },
      { path: 'registrationtpin', loadChildren: () => import('./pages/modules/registration/registration-tpin/registration-tpin.module').then(m => m.RegistrationTpinModule) },
      { path: 'registrationmpin', loadChildren: () => import('./pages/modules/registration/registration-mpin/registration-mpin.module').then(m => m.RegistrationMpinModule) },
      { path: 'commonotp', loadChildren: () => import('./pages/modules/common-otp/common-otp.module').then(m => m.CommonOtpModule) },
      { path: 'set-login-credentials', loadChildren: () => import('./pages/modules/registration/set-login-credentials/set-login-credentials.module').then(m => m.SetLoginCredentialsModule) },
      { path: 'registrationsuccess', loadChildren: () => import('./pages/modules/registration/registration-success/registration-success.module').then(m => m.RegistrationSuccessModule) },
      { path: 'storedetails', loadChildren: () => import('./pages/modules/registration/storedetails/storedetails.module').then(m => m.StoredetailsModule) }

    ]
  },
  {
    path: '',
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    component: LayoutsComponent,
    data: {
      layout: 'classic'
    },
    children: [
      { path: 'dashboard', loadChildren: () => import('./pages/modules/dashboard/dashboard.module').then((m) => m.DashboardModule) },
      { path: 'mallmaster', loadChildren: () => import('./pages/adminmaster/mallmaster/mallmaster.module').then(m => m.MallmasterModule) }
    ]
  },
  {
    path: '',
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    component: UnityComponent,
    data: {
      layout: 'unity'
    },
    children: [

      { path: 'metastore', loadChildren: () => import('./pages/modules/metastore/metastore.module').then(m => m.MetastoreModule) },
    ]
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
