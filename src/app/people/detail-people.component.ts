
import { Component } from '@angular/core';
import { Router } from '@angular/router-deprecated';
import { PeopleService } from './services/people.service';

@Component({
    template: require('./detail-people.component.html'),
    styles: [require('./detail-people.component.css')]
})

export class DetailPeopleComponent {

    loadTotal: number;

    constructor(
        private _router: Router,
        private _peopleService: PeopleService) {
        this.getAdditionalInfo();
    }

    getSelectedPeople() {
        return this._peopleService.getSelectedPeople();
    }

    goToPeople() {
        this._router.navigate(['People']);
    }

    getLoadingStatusOther() {
        return this._peopleService.getLoadingStateOther();
    }

    getLoadingComplete() {
        return (this.loadTotal === this._peopleService.getLoadingStateOther());
    }

    getPlanet() {
        return this._peopleService.getSelPeoplePlanet();
    }

    getFilm() {
        return this._peopleService.getSelPeopleFilm();
    }

    getSpecies() {
        return this._peopleService.getSelPeopleSpecies();
    }

    getStarship() {
        return this._peopleService.getSelPeopleStarship();
    }

    getVehicles() {
        return this._peopleService.getSelPeopleVehicles();
    }

    getAdditionalInfo() {

        this._peopleService.setLoadingStateOther(0);
        this.loadTotal = 0;

        let urlPlanet = this.getSelectedPeople().homeworld !== '' ? this.getSelectedPeople().homeworld : false;
        let urlFilm = this.getSelectedPeople().films.length > 0 ? this.getSelectedPeople().films[0] : false;
        let urlSpecies = this.getSelectedPeople().species.length > 0 ? this.getSelectedPeople().species[0] : false;
        let urlStarship = this.getSelectedPeople().starships.length > 0 ? this.getSelectedPeople().starships[0] : false;
        let urlVehicles = this.getSelectedPeople().vehicles.length > 0 ? this.getSelectedPeople().vehicles[0] : false;

        if (urlPlanet) {
            this.loadTotal++;
            this._peopleService.getPlanetFromAPI(urlPlanet);
        }
        if (urlFilm) {
            this.loadTotal++;
            this._peopleService.getFilmFromAPI(urlFilm);
        }
        if (urlSpecies) {
            this.loadTotal++;
            this._peopleService.getSpeciesFromAPI(urlSpecies);
        }
        if (urlStarship) {
            this.loadTotal++;
            this._peopleService.getStarshipFromAPI(urlStarship);
        }
        if (urlVehicles) {
            this.loadTotal++;
            this._peopleService.getVehiclesFromAPI(urlVehicles);
        }
        console.log('loadTotal: ' + this.loadTotal);
    }
}
