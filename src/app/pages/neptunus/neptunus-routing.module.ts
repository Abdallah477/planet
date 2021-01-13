import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NeptunusPage } from './neptunus.page';

const routes: Routes = [
  {
    path: '',
    component: NeptunusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NeptunusPageRoutingModule {}
