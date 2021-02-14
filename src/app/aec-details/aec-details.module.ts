import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AecDetailsPageRoutingModule } from './aec-details-routing.module';

import { AecDetailsPage } from './aec-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AecDetailsPageRoutingModule
  ],
  declarations: [AecDetailsPage]
})
export class AecDetailsPageModule {}
