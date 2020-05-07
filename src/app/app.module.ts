import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EnteteComponent } from './entete/entete.component';
import { MenuComponent } from './menu/menu.component';
import { MajusculePipe } from './pipes/majuscule.pipe';
import { FormLienComponent } from './form-lien/form-lien.component';

@NgModule({
  declarations: [
    AppComponent,
    EnteteComponent,
    MenuComponent,
    MajusculePipe,
    FormLienComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
