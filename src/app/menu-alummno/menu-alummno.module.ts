import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuAlummnoPageRoutingModule } from './menu-alummno-routing.module';

import { MenuAlummnoPage } from './menu-alummno.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuAlummnoPageRoutingModule
  ],
  declarations: [MenuAlummnoPage]
})
export class MenuAlummnoPageModule {}
