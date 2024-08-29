import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShoppingcarPageRoutingModule } from './shoppingcar-routing.module';

import { ShoppingcarPage } from './shoppingcar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShoppingcarPageRoutingModule
  ],
  declarations: [ShoppingcarPage]
})
export class ShoppingcarPageModule {}
