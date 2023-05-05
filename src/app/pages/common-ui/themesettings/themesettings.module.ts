import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThemesettingsRoutingModule } from './themesettings-routing.module';
import { ThemesettingsComponent } from './themesettings.component';


@NgModule({
  declarations: [
    ThemesettingsComponent
  ],
  imports: [
    CommonModule,
    ThemesettingsRoutingModule
  ],
  exports     : [
    ThemesettingsComponent
  ]
})
export class ThemesettingsModule { }
