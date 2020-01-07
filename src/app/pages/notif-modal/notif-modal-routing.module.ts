import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotifModalPage } from './notif-modal.page';

const routes: Routes = [
  {
    path: '',
    component: NotifModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotifModalPageRoutingModule {}
