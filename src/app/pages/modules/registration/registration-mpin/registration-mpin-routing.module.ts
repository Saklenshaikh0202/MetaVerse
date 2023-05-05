import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationMpinComponent } from './registration-mpin.component';

const routes: Routes = [{ path: '', component: RegistrationMpinComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistrationMpinRoutingModule { }
