import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'; 

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import appRoutes from './routerConfig';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { LoginService } from './services/login/login.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, 
    RouterModule.forRoot(appRoutes), HttpClientModule ],
  declarations: [ AppComponent, HelloComponent, HomeComponent, AboutComponent, DashboardComponent, LoginComponent ],
  bootstrap:    [ AppComponent ],
  providers: [LoginService]
})
export class AppModule { }
