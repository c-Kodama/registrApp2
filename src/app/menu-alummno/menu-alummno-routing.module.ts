import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuAlummnoPage } from './menu-alummno.page';

const routes: Routes = [
  {
    path: '',
    component: MenuAlummnoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuAlummnoPageRoutingModule {}
