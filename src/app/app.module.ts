import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EnteteComponent } from './entete/entete.component';
import { MenuComponent } from './menu/menu.component';
import { MajusculePipe } from './pipes/majuscule.pipe';
import { FormLienComponent } from './form-lien/form-lien.component';
import { FormUserComponent } from './form-user/form-user.component';

@NgModule({
  declarations: [
    AppComponent,
    EnteteComponent,
    MenuComponent,
    MajusculePipe,
    FormLienComponent,
    FormUserComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
