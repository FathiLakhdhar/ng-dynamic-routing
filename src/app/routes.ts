import { MonoAppComponent } from './components/monoApp/mono-app.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { Routes } from '@angular/router';
import { MultiAppComponent } from './components/multiApp/multi-app.component';

export const ROUTES: Routes = [
  {
    path: '',
    component: MultiAppComponent,
    children: []
  },  
  {
    path: 'mono/:instance',
    component: MonoAppComponent,
    children: []
  },
  /*{
    path: 'welcome',
    component: WelcomeComponent
  },
  { path: '',
    redirectTo: '/welcome',
    pathMatch: 'full'
  },*/
  /*{
    path: '**',
    component: ViewsComponent
  },*/
  ];