import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NeptunusPageRoutingModule } from './neptunus-routing.module';

import { NeptunusPage } from './neptunus.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NeptunusPageRoutingModule
  ],
  declarations: [NeptunusPage]
})
export class NeptunusPageModule {}
