import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TearmsandconditionsComponent } from './tearmsandconditions.component';

const routes: Routes = [{ path: '', component: TearmsandconditionsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TearmsandconditionsRoutingModule { }
