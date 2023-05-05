import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NoncustregistrationRoutingModule } from './noncustregistration-routing.module';
import { NoncustregistrationComponent } from './noncustregistration.component';


@NgModule({
  declarations: [
    NoncustregistrationComponent
  ],
  imports: [
    CommonModule,
    NoncustregistrationRoutingModule
  ],
  exports:[NoncustregistrationComponent]

})
export class NoncustregistrationModule { }
