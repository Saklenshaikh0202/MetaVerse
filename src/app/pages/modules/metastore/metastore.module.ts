import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MetastoreRoutingModule } from './metastore-routing.module';
import { MetastoreComponent } from './metastore.component';


@NgModule({
  declarations: [
    MetastoreComponent
  ],
  imports: [
    CommonModule,
    MetastoreRoutingModule
  ]
})
export class MetastoreModule { }
