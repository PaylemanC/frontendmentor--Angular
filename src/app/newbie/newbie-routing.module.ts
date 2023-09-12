import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { QrCodeComponent } from './qr-code/qr-code.component';
import { ProductPreviewCardComponent } from './product-preview-card/product-preview-card.component';
import { InteractiveRatingComponent } from './interactive-rating/interactive-rating.component'

const routes: Routes = [
  { path: 'qr-code', component: QrCodeComponent },
  { path: 'product-preview-card', component: ProductPreviewCardComponent },
  { path: 'interactive-rating', component: InteractiveRatingComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewbieRoutingModule { }
