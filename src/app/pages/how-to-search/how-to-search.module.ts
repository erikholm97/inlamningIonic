import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HowToSearchPageRoutingModule } from './how-to-search-routing.module';

import { HowToSearchPage } from './how-to-search.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HowToSearchPageRoutingModule
  ],
  declarations: [HowToSearchPage]
})
export class HowToSearchPageModule {}
