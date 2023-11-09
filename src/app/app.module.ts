import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { NewbieModule } from './newbie/newbie.module';

import { AppComponent } from './app.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ChallengeComponent } from './pages/challenge/challenge.component';
import { InprogressComponent } from './pages/inprogress/inprogress.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HomeComponent,
    ProjectsComponent,
    ChallengeComponent,
    InprogressComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    NewbieModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
