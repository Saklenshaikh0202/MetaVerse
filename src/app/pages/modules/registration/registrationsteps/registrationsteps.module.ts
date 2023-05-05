import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrationstepsRoutingModule } from './registrationsteps-routing.module';
import { RegistrationstepsComponent } from './registrationsteps.component';
import { CustregistrationModule } from '../custregistration/custregistration.module';
import { NoncustregistrationModule } from '../noncustregistration/noncustregistration.module';
import { RegistrationMpinModule } from '../registration-mpin/registration-mpin.module';
import { RegistrationTpinModule } from '../registration-tpin/registration-tpin.module';
import { RegistrationhomepageModule } from '../registrationhomepage/registrationhomepage.module';
import { CommonOtpModule } from '../../common-otp/common-otp.module';
import { TearmsandconditionsModule } from '../tearmsandconditions/tearmsandconditions.module';
import { SetLoginCredentialsModule } from '../set-login-credentials/set-login-credentials.module';
import { RegistrationSuccessModule } from '../registration-success/registration-success.module';

import { StoredetailsModule } from '../storedetails/storedetails.module';


@NgModule({
  declarations: [
    RegistrationstepsComponent
  ],
  imports: [
    CommonModule,
    RegistrationstepsRoutingModule,
    RegistrationhomepageModule,
    CommonOtpModule,
    CustregistrationModule,
    NoncustregistrationModule,
    RegistrationMpinModule,
    RegistrationTpinModule,
    TearmsandconditionsModule,
    SetLoginCredentialsModule,
    RegistrationSuccessModule,
    StoredetailsModule

  ]
})
export class RegistrationstepsModule { }
