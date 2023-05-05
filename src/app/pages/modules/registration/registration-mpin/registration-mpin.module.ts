import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrationMpinRoutingModule } from './registration-mpin-routing.module';
import { RegistrationMpinComponent } from './registration-mpin.component';


@NgModule({
  declarations: [
    RegistrationMpinComponent
  ],
  imports: [
    CommonModule,
    RegistrationMpinRoutingModule
  ],
  exports:[RegistrationMpinComponent]
})
export class RegistrationMpinModule { }
