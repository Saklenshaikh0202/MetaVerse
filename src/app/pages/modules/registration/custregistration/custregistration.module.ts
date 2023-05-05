import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustregistrationRoutingModule } from './custregistration-routing.module';
import { CustregistrationComponent } from './custregistration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { CommonOtpModule } from '../../common-otp/common-otp.module';


@NgModule({
  declarations: [
    CustregistrationComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CustregistrationRoutingModule,
    SharedModule,
    CommonOtpModule
  ],
  exports:[CustregistrationComponent]
})
export class CustregistrationModule { }
