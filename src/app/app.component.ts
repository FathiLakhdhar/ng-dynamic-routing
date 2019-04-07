import { Component, OnInit } from '@angular/core';
import * as navigation from './data/navigation';
import {entryComponentsMap} from './entry-components';
import { NavigationService } from './services/navigation.service';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { ActiveInstanceService } from './services/activeInstance.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  navigation: any[];
  links: Observable<any[]>;
  isMonoApp: boolean;
  instances: any[]= [];
  activeInstance: any = {};

  constructor(private _navService: NavigationService, private route: Router, private activeInstanceService: ActiveInstanceService){
    this.navigation = this._navService.navigation
    Object.keys(this.navigation).forEach(key=>{
      this.instances.push({
        id: key,
        label: key,
      })
    })
    this.links = this._navService.links.asObservable();
    
    this.route.events.subscribe(event=>{
      if(event instanceof NavigationEnd){
        console.log(event)
      }
    })
  }

  ngOnInit(){
    this.links.subscribe(links=>{
      console.log("links ", links)
    })
    this._navService.isMonoApp.subscribe(isMonoApp => {
      this.isMonoApp = isMonoApp
      if(!isMonoApp){
        this.selectInstance(this.instances[0])
      }
    })
    this.activeInstanceService.activeInstance.subscribe(i=>{this.activeInstance=i});
  }


  getPath(path: string) {
    return this.isMonoApp ? `mono/${this.activeInstance.id}/${path}` : path;
  }

  selectInstance(i){
    this.activeInstanceService.activeInstance.next(i);
    this._navService.buildRoutes(this.navigation[i.id], true);
  }

 
}
