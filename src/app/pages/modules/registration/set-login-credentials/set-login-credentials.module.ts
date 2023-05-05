import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SetLoginCredentialsRoutingModule } from './set-login-credentials-routing.module';
import { SetLoginCredentialsComponent } from './set-login-credentials.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    SetLoginCredentialsComponent
  ],
  imports: [
    CommonModule,
    SetLoginCredentialsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports:[SetLoginCredentialsComponent]
})
export class SetLoginCredentialsModule { }
