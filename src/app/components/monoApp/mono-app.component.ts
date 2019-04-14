import { Component, OnInit, AfterViewInit, AfterViewChecked } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavigationService } from 'src/app/services/navigation.service';
import { ActiveInstanceService } from 'src/app/services/activeInstance.service';

@Component({
    selector: 'mono-app',
    template: `
        <h3>Mono App</h3>
        <router-outlet></router-outlet>
    `,
    styleUrls: []
})
export class MonoAppComponent implements OnInit, AfterViewInit, AfterViewChecked {
    
    navigation: any[];

    constructor(private route: ActivatedRoute, private _navService: NavigationService, private activeInstanceService: ActiveInstanceService) {
        this.navigation = this._navService.navigation;
        this.route.params.subscribe( params =>{
            console.log(params)
            if(params.instance != activeInstanceService.activeInstance.getValue().id){
                // LOAD Links
                console.log("// LOAD Links")
                this._navService.loadNavigation(params.instance).then(()=>{
                    this.activeInstanceService.activeInstance.next({id: params.instance, label: params.instance})
                });
            }
        })
    }

    ngOnInit(){
        
    }

    ngAfterViewInit() {

    }
    ngAfterViewChecked(): void {
        
    }
}
