import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationTpinComponent } from './registration-tpin.component';

const routes: Routes = [{ path: '', component: RegistrationTpinComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistrationTpinRoutingModule { }
