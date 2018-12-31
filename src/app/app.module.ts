import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NbSidebarModule, NbThemeModule, NbLayoutModule, NbSidebarService } from '@nebular/theme';
import { MenuListComponent } from './menu-list/menu-list.component';

import { ThemeModule } from './@theme/theme.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';




@NgModule({
  declarations: [
    AppComponent,
    MenuListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbSidebarModule.forRoot(),

    ThemeModule.forRoot(),
    NgbModule.forRoot(),


  ],
  providers: [NbSidebarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
