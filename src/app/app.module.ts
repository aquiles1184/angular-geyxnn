import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import appRoutes from './routerConfig';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, 
    RouterModule.forRoot(appRoutes) ],
  declarations: [ AppComponent, HelloComponent, HomeComponent, AboutComponent, DashboardComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
