import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FirstCharacter } from './firstcharacter.pipe'

import { AppComponent } from './app.component';
import { SquarePipe } from './square.pipe';
import { PowerPipe } from './power.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FirstCharacter,
    SquarePipe,
    PowerPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
