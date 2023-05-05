import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SetLoginCredentialsComponent } from './set-login-credentials.component';

const routes: Routes = [{ path: '', component: SetLoginCredentialsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SetLoginCredentialsRoutingModule { }
