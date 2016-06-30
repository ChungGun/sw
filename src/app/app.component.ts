import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { HeaderComponent } from './shared/header.component.ts';
import { StarWarsComponent } from './star-wars.component';
import { PeopleComponent } from './people/people.component';
import { DetailPeopleComponent } from './people/detail-people.component';
import { PeopleService } from './people/services/people.service';

/* css files */
import '../../public/css/normalize.css';
import '../../public/css/spinkit.css';
import '../../public/css/styles.css';

@Component({
  selector: 'my-app',
  template: `
    <main>
      <my-header></my-header>
      <div class="body-container">
        <router-outlet></router-outlet>
      </div>
    </main>
  `,
  directives: [
    ROUTER_DIRECTIVES,
    HeaderComponent
  ],
  providers: [
    ROUTER_PROVIDERS,
    PeopleService
  ]
})
@RouteConfig([
  {
    path: '/',
    name: 'Home',
    component: StarWarsComponent,
    useAsDefault: true
  },
  {
    path: '/people',
    name: 'People',
    component: PeopleComponent
  },
  {
    path: '/detail-people',
    name: 'DetailPeople',
    component: DetailPeopleComponent
  }
])
export class AppComponent { }
