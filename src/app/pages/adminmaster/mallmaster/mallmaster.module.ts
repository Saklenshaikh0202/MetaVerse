import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MallmasterComponent } from './mallmaster.component';
import { MallMasterRoutingModule } from './mall-master-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MallmasterComponent
  ],
  imports: [
    CommonModule,
    MallMasterRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  
})
export class MallmasterModule { }
