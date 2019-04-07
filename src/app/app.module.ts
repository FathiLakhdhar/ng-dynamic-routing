import { Page1Component } from './components/pages/page1.component';
import { AdDirective } from './directives/ad.directive';
import { ViewsComponent } from './components/views/views.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Page2Component } from './components/pages/page2.component';
import { Page3Component } from './components/pages/page3.component';
import { MonoAppComponent } from './components/monoApp/mono-app.component';
import { NavigationService } from './services/navigation.service';
import { MultiAppComponent } from './components/multiApp/multi-app.component';
import { ActiveInstanceService } from './services/activeInstance.service';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ViewsComponent,
    AdDirective,
    Page1Component,
    Page2Component,
    Page3Component,
    MonoAppComponent,
    MultiAppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [NavigationService, ActiveInstanceService],
  entryComponents: [
    Page1Component,
    Page2Component,
    Page3Component
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
