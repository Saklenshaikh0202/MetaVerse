import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrationSuccessRoutingModule } from './registration-success-routing.module';
import { RegistrationSuccessComponent } from './registration-success.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    RegistrationSuccessComponent
  ],
  imports: [
    CommonModule,
    RegistrationSuccessRoutingModule,
    SharedModule
  ],
  
  exports: [RegistrationSuccessComponent]
})
export class RegistrationSuccessModule { }
