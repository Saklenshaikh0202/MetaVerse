import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonOtpComponent } from './common-otp.component';

const routes: Routes = [{ path: '', component: CommonOtpComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommonOtpRoutingModule { }
