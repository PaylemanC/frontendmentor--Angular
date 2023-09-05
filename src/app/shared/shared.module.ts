import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';

import { ModuleCardComponent } from './components/module-card/module-card.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';

@NgModule({
  declarations: [
    ModuleCardComponent,
    NavComponent,
    FooterComponent,
    ProjectCardComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [
    ModuleCardComponent,
    NavComponent,
    FooterComponent,
    ProjectCardComponent
  ]
})
export class SharedModule { }
