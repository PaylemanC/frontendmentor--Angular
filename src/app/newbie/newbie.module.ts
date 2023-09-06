import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewbieRoutingModule } from './newbie-routing.module';
import { QrCodeComponent } from './qr-code/qr-code.component';

@NgModule({
  declarations: [
    QrCodeComponent
  ],
  imports: [
    CommonModule,
    NewbieRoutingModule
  ]
})
export class NewbieModule { }
