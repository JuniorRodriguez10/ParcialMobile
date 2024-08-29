import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShoppingcarPage } from './shoppingcar.page';

const routes: Routes = [
  {
    path: '',
    component: ShoppingcarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShoppingcarPageRoutingModule {}
