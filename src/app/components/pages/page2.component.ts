import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'page2',
    template: `
    <div style="text-align:center">
        <h1>
            Welcome to {{ title }}!
        </h1>
        <input type="text"/>
    </div>
    `,
    styleUrls: []
})
export class Page2Component implements OnInit {
    title = 'Page2';
    constructor() { }

    ngOnInit(): void { }
}
