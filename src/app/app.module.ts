import { Page1Component } from './components/pages/page1.component';
import { AdDirective } from './directives/ad.directive';
import { ViewsComponent } from './components/views/views.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER, Injector } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Page2Component } from './components/pages/page2.component';
import { Page3Component } from './components/pages/page3.component';
import { MonoAppComponent } from './components/monoApp/mono-app.component';
import { NavigationService } from './services/navigation.service';
import { MultiAppComponent } from './components/multiApp/multi-app.component';
import { ActiveInstanceService } from './services/activeInstance.service';
import { Router } from '@angular/router';


export function initRoutes(navService: NavigationService, activeInstanceService: ActiveInstanceService) {
  return () => {
    let arr = location.hash.split("/");
    if (arr.length>=3 && arr[1] == "mono") {
      let instanceId: string = arr[2];
      return  navService.loadNavigation(instanceId).then(()=>{
        activeInstanceService.activeInstance.next({id: instanceId, label: instanceId});
        navService.isMonoApp.next(true);
      });
    }else {
      navService.isMonoApp.next(false);
      return Promise.resolve(true);
    }
  };
}


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
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [NavigationService, ActiveInstanceService, {
    'provide': APP_INITIALIZER,
    'useFactory': initRoutes,
    'deps': [NavigationService, ActiveInstanceService],
    'multi': true,
   }],
  entryComponents: [
    Page1Component,
    Page2Component,
    Page3Component
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
