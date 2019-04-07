import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'welcome',
    template: `
    <div style="text-align:center">
        <h1>
            Welcome to {{ title }}!
        </h1>
        <input type="text"/>
        <page1></page1>
    </div>
    `,
    styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
    title = 'Welcome Component';
    constructor() { }

    ngOnInit(): void { }
}
