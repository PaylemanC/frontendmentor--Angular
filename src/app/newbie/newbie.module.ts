import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewbieRoutingModule } from './newbie-routing.module';

import { QrCodeComponent } from './qr-code/qr-code.component';
import { ProductPreviewCardComponent } from './product-preview-card/product-preview-card.component';

@NgModule({
  declarations: [
    QrCodeComponent,
    ProductPreviewCardComponent
  ],
  imports: [
    CommonModule,
    NewbieRoutingModule
  ]
})
export class NewbieModule { }
