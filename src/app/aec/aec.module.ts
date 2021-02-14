import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AECPageRoutingModule } from './aec-routing.module';

import { AECPage } from './aec.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AECPageRoutingModule
  ],
  declarations: [AECPage]
})
export class AECPageModule {}
