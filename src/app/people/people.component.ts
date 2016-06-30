
import { Component } from '@angular/core';
import { Router } from '@angular/router-deprecated';
import { PeopleService } from './services/people.service';
import { InfiniteScroll } from 'angular2-infinite-scroll';


@Component({
    template: require('./people.component.html'),
    styles: [require('./people.component.css')],
    directives: [InfiniteScroll]
})

export class PeopleComponent {

    constructor(
        private _router: Router,
        private _peopleService: PeopleService) {
        if (this._peopleService.getHasNext() && this._peopleService.getFirstLoad()) {
            this._peopleService.getPeopleFromAPI();
        }
    }

    getPeopleList() {
        return this._peopleService.getPeopleList();
    }

    getLoadingState() {
        return this._peopleService.getLoadingState();
    }

    getHasNext() {
        return this._peopleService.getHasNext();
    }

    onScrollDown() {
        console.log('scrolled!!');
        if (this._peopleService.getHasNext()) {
            this._peopleService.setLoadingState(true);
            this._peopleService.getPeopleFromAPI();
        }

    }

    goToDetailPeople(pSelected:any) {
        this._peopleService.setSelectedPeople(pSelected);
        this._router.navigate(['DetailPeople']);
    }

}
