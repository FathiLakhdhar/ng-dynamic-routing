import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'page3',
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
export class Page3Component implements OnInit {
    title = 'Page3';
    constructor() { }

    ngOnInit(): void { }
}
