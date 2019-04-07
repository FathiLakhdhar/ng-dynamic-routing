import { Subscription, Observable } from 'rxjs/internal/Rx';
import { Router, ActivatedRoute, RouterState, NavigationEnd } from '@angular/router';
import {
    Component,
    ComponentFactoryResolver,
    OnChanges,
    OnDestroy,
    OnInit,
    SimpleChanges,
    ViewChild
} from '@angular/core';
import { AdDirective } from '../../directives/ad.directive';
import { WelcomeComponent } from '../welcome/welcome.component';

@Component({
    selector: 'views',
    template: `
    <div style="text-align:center">
        <h1>
            Welcome to {{ title }}!
            <ng-template ad-host></ng-template>
        </h1>
    </div>
    `
})
export class ViewsComponent implements OnInit, OnDestroy, OnChanges {

    title = 'Views Component';
    routeSubscribe: Subscription;
    @ViewChild(AdDirective) adHost: AdDirective;

    components: any = {};
    
    constructor(private router: Router, private componentFactoryResolver: ComponentFactoryResolver) {
     }


    ngOnInit(): void {
        //console.log(this.router.config)
        //console.log(this.router.url)
        this.loadComponent(this.router.url);
        this.routeSubscribe = this.router.events.subscribe((event) => {
            if(event instanceof NavigationEnd){
                this.loadComponent(event.url);
            }
        })
    }

    loadComponent(path: string) {
        console.log(path);
        let adItem = {component: WelcomeComponent};

        let componentFactory = this.componentFactoryResolver.resolveComponentFactory(adItem.component);

        let viewContainerRef = this.adHost.viewContainerRef;
        viewContainerRef.detach(0);
        if(this.components[path]){
            console.log("exist")
            viewContainerRef.insert(this.components[path])
        }else{
            console.log("new")
            let componentRef = viewContainerRef.createComponent(componentFactory);
            console.log(viewContainerRef.get(0))
            this.components[path] = viewContainerRef.get(0);
        }

        /*
        const factories = Array.from(this.resolver['_factories'].keys());
        const factoryClass = <Type<any>>factories.find((x: any) => x.name === compClassName);
        const factory = this.resolver.resolveComponentFactory(factoryClass);
        
        */

        //(<AdComponent>componentRef.instance).data = adItem.data;
    }

     ngOnChanges(changes: SimpleChanges): void {
         console.log(changes);
     }

     ngOnDestroy(): void {
             console.log("unsubscribe")
         if (this.routeSubscribe) {
             this.routeSubscribe.unsubscribe();
         }
     }
}
