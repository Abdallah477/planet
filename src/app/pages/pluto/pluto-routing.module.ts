import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlutoPage } from './pluto.page';

const routes: Routes = [
  {
    path: '',
    component: PlutoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlutoPageRoutingModule {}
