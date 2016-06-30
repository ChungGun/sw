
import { Component } from '@angular/core';
import { Router } from '@angular/router-deprecated';

@Component({
    template: require('./star-wars.component.html'),
    styles: [require('./star-wars.component.css')]
})

export class StarWarsComponent {
    constructor(
        private _router: Router) {
    }

    goToPeople() {
        this._router.navigate(['People']);
    }

}
