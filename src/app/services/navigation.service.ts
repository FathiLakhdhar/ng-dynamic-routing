import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as navigation from '../data/navigation';
import {entryComponentsMap} from '../entry-components';
import { BehaviorSubject } from 'rxjs';
import { ROUTES } from '../routes'

@Injectable()
export class NavigationService {
    navigation: any[];
    links: BehaviorSubject<any[]> = new BehaviorSubject([]);
    isMonoApp: BehaviorSubject<boolean> = new BehaviorSubject(false);
    private children = [];
    constructor(private _router: Router){
        this.navigation = navigation.data;
    }

    buildRoutes(nav, reset: boolean) {
        this.children = this.buildChildren(nav);
        this.links.next(this.children)
        this.addRouteChildren(this.children, reset);
    }

    private buildNavLinks(){

    }

    buildChildren(obj){
        function iter(r, p) {
          var children = r.children;
          if (children && children.length) {
            return children.forEach(x => iter(x, p.concat(r.id)));
          }else{p.push(r.id)}
          result.push({
            label: r.label,
            path: p.join('/'), 
            selector: r.selector
          });
        }
        var result = [];
        iter(obj, []);
        return result;
      }

      resetRoutes(){
        this._router.resetConfig(ROUTES);
      }
    
    
      addRouteChildren(children: any[], reset: boolean) {
        let routerConfig = reset? ROUTES : this._router.config;
        routerConfig[0].children = [];
        routerConfig[1].children = [];
        children.forEach(r=>{
          routerConfig[0].children.push({
            path: r.path,
            component: entryComponentsMap[r.selector]
          });
          routerConfig[1].children.push({
            path: r.path,
            component: entryComponentsMap[r.selector]
          });
        })
        this._router.resetConfig(routerConfig);
      }
}