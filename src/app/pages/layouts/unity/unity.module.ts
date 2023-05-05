import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnityRoutingRoutingModule } from './unity-routing-routing.module';

import { HeaderModule } from '../../common-ui/header/header.module';
import { FooterModule } from '../../common-ui/footer/footer.module';
import { NotificationsModule } from '../../common-ui/notifications/notifications.module';
import { SidenavModule } from '../../common-ui/sidenav/sidenav.module';
import { UnityComponent } from './unity.component';
import { MetastoreModule } from '../../modules/metastore/metastore.module';

@NgModule({
  declarations: [
    UnityComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
    FooterModule,
    NotificationsModule,
    SidenavModule,
   UnityRoutingRoutingModule,
   MetastoreModule
  ],
  exports     : [
    UnityComponent
  ]
})
export class UnityModule { }
