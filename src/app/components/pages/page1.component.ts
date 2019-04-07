import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'page1',
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
export class Page1Component implements OnInit {
    title = 'Page1';
    constructor() { }

    ngOnInit(): void { }
}
