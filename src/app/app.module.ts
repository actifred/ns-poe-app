import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { EnteteComponent } from './entete/entete.component';
import { MenuComponent } from './menu/menu.component';
import { MajusculePipe } from './pipes/majuscule.pipe';
import { FormLienComponent } from './form-lien/form-lien.component';
import { FormUserComponent } from './form-user/form-user.component';
import { LiensService } from './services/liens.service';
import { UserListComponent } from './user-list/user-list.component';
import { UserCardComponent } from './user-card/user-card.component';
import { UserManagerService } from './services/user-manager.service';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserFullNamePipe } from './pipes/user-full-name.pipe';

import {CalendarModule} from 'primeng/calendar';
import { DatePickerComponent } from './date-picker/date-picker.component';


const appRoutes: Routes = [
  { 
    path: 'users',
    component: UserListComponent
  },
  { 
    path: 'detail/:userName',
    component: UserDetailComponent
  },
  { 
    path: 'calendar',
    component: DatePickerComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'users'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    EnteteComponent,
    MenuComponent,
    MajusculePipe,
    FormLienComponent,
    FormUserComponent,
    UserListComponent,
    UserCardComponent,
    UserDetailComponent,
    UserFullNamePipe,
    DatePickerComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CalendarModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ LiensService, UserManagerService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
