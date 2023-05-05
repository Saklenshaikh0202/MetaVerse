import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoredetailsComponent } from './storedetails.component';

const routes: Routes = [{ path: '', component: StoredetailsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoredetailsRoutingModule { }
