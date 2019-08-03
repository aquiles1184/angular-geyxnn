import { Routes, } from '@angular/router';
import { NeedAuthGuard } from './services/login/need-auth-guard';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const appRoutes: Routes = [
  { path: 'login', 
    component: LoginComponent,  
    pathMatch: 'full'
  },
  { path: 'logout', 
    component: LogoutComponent,  
    pathMatch: 'full'
  },
  { path: 'home', 
    component: HomeComponent 
  },
  {
    path: 'about',
    component: AboutComponent
  },
  { path: 'dashboard',
    component: DashboardComponent,
    canActivate: [NeedAuthGuard] 
  }
];
export default appRoutes;