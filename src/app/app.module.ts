import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TurnJSComponent } from './components/turn-js/turn-js.component';

@NgModule({
  declarations: [
    AppComponent,
    TurnJSComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
