import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GoBackPage } from './go-back.page';

const routes: Routes = [
  {
    path: '',
    component: GoBackPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GoBackPageRoutingModule {}
