import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationhomepageComponent } from './registrationhomepage.component';

const routes: Routes = [
  { path: '', component: RegistrationhomepageComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistrationhomepageRoutingModule { }
