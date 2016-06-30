
import { Component } from '@angular/core';
import { Router } from '@angular/router-deprecated';

@Component({
    selector: 'my-header',
    template: `
    <div class="header">
        <div (click)="gotoHome()" class="logo"></div>
    </div>
    `,
    styles: [require('./header.component.css')]
})

export class HeaderComponent {
    constructor(
        private _router: Router) {
    }

    gotoHome() {
        this._router.navigate(['Home']);
    }
}
