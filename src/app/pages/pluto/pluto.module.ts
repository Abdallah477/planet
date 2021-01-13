import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlutoPageRoutingModule } from './pluto-routing.module';

import { PlutoPage } from './pluto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlutoPageRoutingModule
  ],
  declarations: [PlutoPage]
})
export class PlutoPageModule {}
