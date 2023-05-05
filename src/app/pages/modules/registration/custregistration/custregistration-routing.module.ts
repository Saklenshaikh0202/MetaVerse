import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustregistrationComponent } from './custregistration.component';

const routes: Routes = [{ path: '', component: CustregistrationComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustregistrationRoutingModule { }
