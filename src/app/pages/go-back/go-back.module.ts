import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GoBackPageRoutingModule } from './go-back-routing.module';

import { GoBackPage } from './go-back.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GoBackPageRoutingModule
  ],
  declarations: [GoBackPage]
})
export class GoBackPageModule {}
