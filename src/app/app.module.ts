import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'; 
import { MenubarModule} from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LibraryComponent } from './library/library.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HolderComponent } from './holder/holder.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'; 
import {InputTextModule} from 'primeng/inputtext';
import { MyteamComponent } from './myteam/myteam.component';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import {DialogModule} from 'primeng/dialog';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LibraryComponent,
    ContactUsComponent,
    HolderComponent,
    PageNotFoundComponent,
    MyteamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
    RouterModule,
    InputTextModule,
    FormsModule,
    CardModule,
    ButtonModule,
    DialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
