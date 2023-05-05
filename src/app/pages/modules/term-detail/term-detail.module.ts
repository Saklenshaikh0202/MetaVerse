import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TermDetailRoutingModule } from './term-detail-routing.module';
import { TermDetailComponent } from './term-detail.component';


@NgModule({
  declarations: [
    TermDetailComponent
  ],
  imports: [
    CommonModule,
    TermDetailRoutingModule
  ]
})
export class TermDetailModule { }
