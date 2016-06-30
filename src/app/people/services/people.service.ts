import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class PeopleService {

    private peopleList: any;
    private selectedPeople: any;
    private selPeoplePlanet: string = '-';
    private selPeopleFilm: string = '-';
    private selPeopleSpecies: string = '-';
    private selPeopleStarship: string = '-';
    private selPeopleVehicles: string = '-';

    private firstLoad: boolean;
    private pages: number;
    private hasNext: boolean;
    private loadingState: boolean;
    private loadingStateOther: number;

    constructor(private _http: Http) {
        this.firstLoad = true;
        this.pages = 1;
        this.hasNext = true;
    }

    /* getter */
    getPages() {
        return this.pages;
    }

    getFirstLoad() {
        return this.firstLoad;
    }

    getPeopleList() {
        return this.peopleList;
    }

    getHasNext() {
        return this.hasNext;
    }

    getLoadingState() {
        return this.loadingState;
    }

    getLoadingStateOther() {
        return this.loadingStateOther;
    }

    getSelectedPeople() {
        return this.selectedPeople;
    }

    getSelPeoplePlanet() {
        return this.selPeoplePlanet;
    }

    getSelPeopleFilm() {
        return this.selPeopleFilm;
    }

    getSelPeopleSpecies() {
        return this.selPeopleSpecies;
    }

    getSelPeopleStarship() {
        return this.selPeopleStarship;
    }

    getSelPeopleVehicles() {
        return this.selPeopleVehicles;
    }

    /* setter */
    setLoadingState(pState: boolean) {
        this.loadingState = pState;
    }
    setSelectedPeople(pSelected: any) {
        this.selectedPeople = pSelected;
    }
    setLoadingStateOther(pLoadOther: number) {
        this.loadingStateOther = pLoadOther;
    }

    /* Method */
    pushToList(pPeopleList: any) {
        if (this.firstLoad) {
            this.peopleList = pPeopleList.results;
            this.firstLoad = false;
            console.log('length: ' + this.peopleList.length);
        } else {
            this.peopleList = this.peopleList.concat(pPeopleList.results);
            console.log('length: ' + this.peopleList.length);
            if (pPeopleList.next === null) {
                this.hasNext = false;
            }
        }
        this.pages++;
    }

    getPeopleFromAPI() {
        this.loadingState = true;
        let url = 'http://swapi.co/api/people/?page=' + this.pages;
        console.log('http get: ' + url);
        this._http.get(url).subscribe(
            response => {
                this.pushToList(response.json());
                this.loadingState = false;
            },
            error => {
                console.log(error);
                this.loadingState = false;
            }
        );
    }

    getPlanetFromAPI(pUrl: string) {
        console.log('http get: ' + pUrl);
        this._http.get(pUrl).subscribe(
            response => {
                this.selPeoplePlanet = (response.json().name);
                this.loadingStateOther++;
            },
            error => {
                console.log(error);
                this.selPeoplePlanet = '-';
                this.loadingStateOther++;
            }
        );
    }


    getFilmFromAPI(pUrl: string) {
        console.log('http get: ' + pUrl);
        this._http.get(pUrl).subscribe(
            response => {
                this.selPeopleFilm = (response.json().title);
                this.loadingStateOther++;
            },
            error => {
                console.log(error);
                this.selPeopleFilm = '-';
                this.loadingStateOther++;
            }
        );
    }

    getSpeciesFromAPI(pUrl: string) {
        console.log('http get: ' + pUrl);
        this._http.get(pUrl).subscribe(
            response => {
                this.selPeopleSpecies = (response.json().name);
                this.loadingStateOther++;
            },
            error => {
                console.log(error);
                this.selPeopleSpecies = '-';
                this.loadingStateOther++;
            }
        );
    }

    getStarshipFromAPI(pUrl: string) {
        console.log('http get: ' + pUrl);
        this._http.get(pUrl).subscribe(
            response => {
                this.selPeopleStarship = (response.json().name);
                this.loadingStateOther++;
            },
            error => {
                console.log(error);
                this.selPeopleStarship = '-';
                this.loadingStateOther++;
            }
        );
    }

    getVehiclesFromAPI(pUrl: string) {
        console.log('http get: ' + pUrl);
        this._http.get(pUrl).subscribe(
            response => {
                this.selPeopleVehicles = (response.json().name);
                this.loadingStateOther++;
            },
            error => {
                console.log(error);
                this.selPeopleVehicles = '-';
                this.loadingStateOther++;
            }
        );
    }

}
