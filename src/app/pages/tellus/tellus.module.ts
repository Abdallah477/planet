import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TellusPageRoutingModule } from './tellus-routing.module';

import { TellusPage } from './tellus.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TellusPageRoutingModule
  ],
  declarations: [TellusPage]
})
export class TellusPageModule {}
