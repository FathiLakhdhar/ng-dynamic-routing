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
  links: Observable<any[]>;
  isMonoApp: boolean;
  instances: any[]=  [{
    id: "ST1",
    label: "ST1",
  },{
    id: "ST2",
    label: "ST2",
  }];
  activeInstance: any = {};

  constructor(private _navService: NavigationService, private route: Router, private activeInstanceService: ActiveInstanceService){
    
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
    this.activeInstanceService.activeInstance.subscribe(i=>{
      //console.log(i)
      this.activeInstance=i
    });
  }


  getPath(path: string) {
    return this.isMonoApp ? `mono/${this.activeInstance.id}/${path}` : path;
  }

  selectInstance(i){
    this._navService.loadNavigation(i.id).then(()=>{
      this.activeInstanceService.activeInstance.next(i);
    })
  }

 
}
