import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Parallax, ParallaxConfig } from 'ngx-parallax';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    Parallax
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
