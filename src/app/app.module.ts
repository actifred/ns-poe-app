import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EnteteComponent } from './entete/entete.component';
import { MenuComponent } from './menu/menu.component';
import { MajusculePipe } from './pipes/majuscule.pipe';

@NgModule({
  declarations: [
    AppComponent,
    EnteteComponent,
    MenuComponent,
    MajusculePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
