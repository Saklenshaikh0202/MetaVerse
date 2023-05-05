import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationstepsComponent } from './registrationsteps.component';

const routes: Routes = [{ path: '', component: RegistrationstepsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistrationstepsRoutingModule { }
