import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MallmasterComponent } from './mallmaster.component';

const routes: Routes = [
  {path: '', component: MallmasterComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MallMasterRoutingModule { }
