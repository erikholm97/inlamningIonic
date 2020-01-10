import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HowToSearchPage } from './how-to-search.page';

const routes: Routes = [
  {
    path: '',
    component: HowToSearchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HowToSearchPageRoutingModule {}
