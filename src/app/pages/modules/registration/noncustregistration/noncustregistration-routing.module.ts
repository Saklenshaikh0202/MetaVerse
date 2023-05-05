import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoncustregistrationComponent } from './noncustregistration.component';

const routes: Routes = [{ path: '', component: NoncustregistrationComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NoncustregistrationRoutingModule { }
