import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotifPagePageRoutingModule } from './notif-page-routing.module';

import { NotifPagePage } from './notif-page.page';
import { HeaderComponent } from '../../components/header/header.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    NotifPagePageRoutingModule
  ],
  declarations: [NotifPagePage, ]
})
export class NotifPagePageModule {}
