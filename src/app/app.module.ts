import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from "./pages/home/home.component";
import { ExperienceComponent } from "./pages/experience/experience.component";
import {ScalingColumnComponent} from "./sub-components/scaling-column/scaling-column.component";

@NgModule({
  declarations: [
    AppComponent,

    //Pages
    HomeComponent,
    ExperienceComponent,

    //Sub-components
    ScalingColumnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
