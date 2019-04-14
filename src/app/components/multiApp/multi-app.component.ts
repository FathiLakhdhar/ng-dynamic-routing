import { Component, OnInit, AfterViewInit, AfterViewChecked } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
    selector: 'multi-app',
    template: `
        <h3>Multi App</h3>
        <router-outlet></router-outlet>
    `,
    styleUrls: []
})
export class MultiAppComponent implements OnInit, AfterViewInit, AfterViewChecked {
    
    navigation: any[];
    constructor(private route: ActivatedRoute, private _navService: NavigationService) {
        this.navigation = this._navService.navigation;
        /*this.route.params.subscribe( params =>{
            if(this.navigation[params.instance]){
                // LOAD Links
                console.log("// LOAD Links")
               this._navService.buildRoutes(this.navigation[params.instance], true);
            }
        })*/
    }

    ngOnInit(){
        
    }

    ngAfterViewInit() {

    }
    ngAfterViewChecked(): void {
        
    }
}
