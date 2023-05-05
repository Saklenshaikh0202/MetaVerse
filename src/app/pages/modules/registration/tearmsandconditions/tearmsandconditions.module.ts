import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TearmsandconditionsRoutingModule } from './tearmsandconditions-routing.module';
import { TearmsandconditionsComponent } from './tearmsandconditions.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TearmsandconditionsComponent
  ],
  imports: [
    CommonModule,
    TearmsandconditionsRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports:[TearmsandconditionsComponent]
})
export class TearmsandconditionsModule { }
