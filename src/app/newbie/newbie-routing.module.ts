import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { QrCodeComponent } from './qr-code/qr-code.component';
import { ProductPreviewCardComponent } from './product-preview-card/product-preview-card.component';
import { InteractiveRatingComponent } from './interactive-rating/interactive-rating.component';
import { ResultsSummaryComponent } from './results-summary/results-summary.component';
import { ChallengeComponent } from '../pages/challenge/challenge.component';
import { NftPreviewCardComponent } from './nft-preview-card/nft-preview-card.component';
import { InprogressComponent } from '../pages/inprogress/inprogress.component';

const routes: Routes = [
  { path: '', component: ChallengeComponent, children: [
    { path: 'challenge', component: InprogressComponent },
    { path: 'qr-code', component: QrCodeComponent },
    { path: 'product-preview-card', component: ProductPreviewCardComponent },
    { path: 'interactive-rating', component: InteractiveRatingComponent},
    { path: 'results-summary', component: ResultsSummaryComponent},
    { path: 'nft-preview-card', component: NftPreviewCardComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewbieRoutingModule { }
