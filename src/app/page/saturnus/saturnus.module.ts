import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SaturnusPageRoutingModule } from './saturnus-routing.module';

import { SaturnusPage } from './saturnus.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SaturnusPageRoutingModule
  ],
  declarations: [SaturnusPage]
})
export class SaturnusPageModule {}
