import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MerkuriusPage } from './merkurius.page';

const routes: Routes = [
  {
    path: '',
    component: MerkuriusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MerkuriusPageRoutingModule {}
