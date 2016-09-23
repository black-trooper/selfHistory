import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

// import { Location, LocationStrategy, HashLocationStrategy } from '@angular/common';

// Imports for loading & configuring the in-memory web api
import { HttpModule, XHRBackend } from '@angular/http';
//import { InMemoryBackendService, SEED_DATA } from 'angular2-in-memory-web-api';
//import { InMemoryDataService }               from './in-memory-data.service';

import { AppComponent }  from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { routing }       from './app.routing';

import { NavigationComponent }  from './navigation/navigation.component';
import { ListComponent }  from './list/list.component';
import { AddComponent }  from './add/add.component';

// import { HeroService }   from './hero.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpModule,
    NgbModule,
  ],
  declarations: [
    AppComponent,
    NavigationComponent,
    ListComponent,
    // DashboardComponent,
    // HeroesComponent,
    // HeroDetailComponent,
    // HeroAddComponent,
    // HeroEditComponent,
    AddComponent,
  ],
  // providers: [
  //   HeroService,
  //   { provide: XHRBackend, useClass: InMemoryBackendService }, // in-mem server
  //   { provide: SEED_DATA,  useClass: InMemoryDataService },
  //   { provide: LocationStrategy, useClass: HashLocationStrategy }
  // ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
