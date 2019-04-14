import { Injectable, Injector  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import * as navigation from '../data/navigation';
import {entryComponentsMap} from '../entry-components';
import { BehaviorSubject } from 'rxjs';
import { ROUTES } from '../routes';

@Injectable()
export class NavigationService {
    navigation: any[];
    links: BehaviorSubject<any[]> = new BehaviorSubject([]);
    isMonoApp: BehaviorSubject<boolean> = new BehaviorSubject(false);
    private children = [];
    constructor(private _injector: Injector, private _http: HttpClient){
    }

    buildRoutes(menu, reset: boolean) {
        this.children = this.buildChildren(menu);
        this.links.next(this.children)
        this.addRouteChildren(this.children, reset);
    }

    loadNavigation(instanceId: string){
      let url = `http://localhost/cdch/navigation.php?instanceId=${instanceId}`
      return new Promise((resolve, reject) => {
        setTimeout(() => {
            this._http.get(url)
            .subscribe(
              (response: any[]) => {
                this.navigation = response;
                this.buildRoutes(this.navigation, true);
                resolve(true);
              },
              err => {
                console.log(err);
                reject(false);
              }
            );
         });
        });
    }

    private buildNavLinks(){

    }

    buildChildren(menu){
      function iter(r, p) {
          var children = r.children;
          if (children && children.length) {
            return children.forEach(x => iter(x, p.concat(r.id)));
          }else{p.push(r.id)}
  
          let x = r;
          x.path = p.join('/')
          result.push(x)
        }
        var result = [];
        menu.forEach(m=>{
            iter(m, []);
        });
        return result;
  }

      resetRoutes(){
        //this._router.resetConfig(ROUTES);
      }
    
    
      addRouteChildren(children: any[], reset: boolean) {
        const router = this._injector.get(Router);
        console.log(router);
        let routerConfig = router.config;
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
        router.resetConfig(routerConfig);
      }
}