import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SpaPageRoutingModule } from './spa-routing.module';

import { SpaPage } from './spa.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    SpaPageRoutingModule
  ],
  declarations: [SpaPage]
})
export class SpaPageModule {}
