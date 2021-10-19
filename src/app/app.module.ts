import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FirstServiceModule} from "./first-service/first-service.module";
import {SecondServiceModule} from "./second-service/second-service.module";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FirstServiceModule,
    SecondServiceModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
