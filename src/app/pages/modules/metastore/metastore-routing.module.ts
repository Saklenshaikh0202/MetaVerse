import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MetastoreComponent } from './metastore.component';

const routes: Routes = [
   {path: '', component: MetastoreComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MetastoreRoutingModule { }
