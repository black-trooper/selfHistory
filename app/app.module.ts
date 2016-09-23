import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { Location, LocationStrategy, HashLocationStrategy } from '@angular/common';

// Imports for loading & configuring the in-memory web api
import { HttpModule, XHRBackend } from '@angular/http';
import { InMemoryBackendService, SEED_DATA } from 'angular2-in-memory-web-api';
//import { InMemoryDataService }               from './in-memory-data.service';

import { AppComponent }  from './app.component';
// import { routing }       from './app.routing';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

// import { HeroesComponent }     from './heroes.component';
// import { HeroDetailComponent } from './hero-detail.component';
// import { HeroAddComponent }    from './hero-add.component';
// import { HeroEditComponent }   from './hero-edit.component';
//
// import { HeroService }   from './hero.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    // routing,
    HttpModule,
    NgbModule,
  ],
  declarations: [
    AppComponent,
    // DashboardComponent,
    // HeroesComponent,
    // HeroDetailComponent,
    // HeroAddComponent,
    // HeroEditComponent,
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
