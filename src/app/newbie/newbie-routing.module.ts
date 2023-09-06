import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { QrCodeComponent } from './qr-code/qr-code.component';

const routes: Routes = [
  { path: 'qr-code', component: QrCodeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewbieRoutingModule { }
