import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SaturnusPage } from './saturnus.page';

const routes: Routes = [
  {
    path: '',
    component: SaturnusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SaturnusPageRoutingModule {}
