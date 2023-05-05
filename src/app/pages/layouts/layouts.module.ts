import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutsRoutingModule } from './layouts-routing.module';
import { LayoutsComponent } from './layouts.component';
import { EmptyModule } from './empty/empty.module';
import { ClassicModule } from './classic/classic.module';
import { UnityComponent } from './unity/unity.component';
import { UnityModule } from './unity/unity.module';


@NgModule({
  declarations: [
    LayoutsComponent,
    
  ],
  imports: [
    CommonModule,
    ClassicModule,
    EmptyModule,
    UnityModule,
    LayoutsRoutingModule,
  ],
  exports: [
    LayoutsComponent,
    ClassicModule,
    EmptyModule,
    UnityModule
  ]
})
export class LayoutsModule { }
