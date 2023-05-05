import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrationTpinRoutingModule } from './registration-tpin-routing.module';
import { RegistrationTpinComponent } from './registration-tpin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    RegistrationTpinComponent
  ],
  imports: [
    CommonModule,
    RegistrationTpinRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    
  ],
  exports: [RegistrationTpinComponent]
})
export class RegistrationTpinModule { }
