import { Page1Component } from './components/pages/page1.component';
import { ViewsComponent } from './components/views/views.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MonoAppComponent } from './components/monoApp/mono-app.component';

import {ROUTES} from './routes';

@NgModule({
  imports: [RouterModule.forRoot(ROUTES, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
