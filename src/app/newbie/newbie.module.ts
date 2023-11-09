import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewbieRoutingModule } from './newbie-routing.module';

import { QrCodeComponent } from './qr-code/qr-code.component';
import { ProductPreviewCardComponent } from './product-preview-card/product-preview-card.component';
import { InteractiveRatingComponent } from './interactive-rating/interactive-rating.component';
import { ResultsSummaryComponent } from './results-summary/results-summary.component';
import { NftPreviewCardComponent } from './nft-preview-card/nft-preview-card.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';

@NgModule({
  declarations: [
    QrCodeComponent,
    ProductPreviewCardComponent,
    InteractiveRatingComponent,
    ResultsSummaryComponent,
    NftPreviewCardComponent,
    OrderSummaryComponent
  ],
  imports: [
    CommonModule,
    NewbieRoutingModule
  ]
})
export class NewbieModule { }
