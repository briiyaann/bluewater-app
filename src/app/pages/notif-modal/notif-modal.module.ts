import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotifModalPageRoutingModule } from './notif-modal-routing.module';

import { NotifModalPage } from './notif-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotifModalPageRoutingModule
  ],
  declarations: [NotifModalPage]
})
export class NotifModalPageModule {}
