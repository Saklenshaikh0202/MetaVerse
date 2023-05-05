import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonOtpRoutingModule } from './common-otp-routing.module';
import { CommonOtpComponent } from './common-otp.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    CommonOtpComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
    CommonOtpRoutingModule
  ],
  exports: [CommonOtpComponent]
})
export class CommonOtpModule { }
