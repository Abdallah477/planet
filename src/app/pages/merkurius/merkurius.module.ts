import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MerkuriusPageRoutingModule } from './merkurius-routing.module';

import { MerkuriusPage } from './merkurius.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MerkuriusPageRoutingModule
  ],
  declarations: [MerkuriusPage]
})
export class MerkuriusPageModule {}
