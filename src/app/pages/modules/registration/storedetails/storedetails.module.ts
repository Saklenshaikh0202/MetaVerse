import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoredetailsComponent } from './storedetails.component';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistrationhomepageComponent } from '../registrationhomepage/registrationhomepage.component';
import { RegistrationhomepageModule } from '../registrationhomepage/registrationhomepage.module';



@NgModule({
  declarations: [
    StoredetailsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RegistrationhomepageModule
  ],
  exports:[StoredetailsComponent]
})
export class StoredetailsModule { }
