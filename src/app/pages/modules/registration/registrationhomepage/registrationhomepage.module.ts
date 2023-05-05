import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrationhomepageRoutingModule } from './registrationhomepage-routing.module';
import { RegistrationhomepageComponent } from './registrationhomepage.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    RegistrationhomepageComponent
  ],
  imports: [
    CommonModule,
    RegistrationhomepageRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[RegistrationhomepageComponent]
})
export class RegistrationhomepageModule { }
