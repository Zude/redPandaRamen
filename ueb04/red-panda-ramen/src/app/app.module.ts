import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {InMemoryDataService} from './in-memory-data.service';
import {MessagesComponent} from './messages/messages.component';
import {RecipeDetailComponent} from './recipe-detail/recipe-detail.component';
import {RecipeSearchComponent} from './recipe-search/recipe-search.component';
import {RecipesComponent} from './recipes/recipes.component';

@NgModule({

  imports : [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService,
                                           { dataEncapsulation : false })
  ],

  declarations : [
    AppComponent,
    RecipesComponent,
    RecipeDetailComponent,
    MessagesComponent,
    DashboardComponent,
    RecipeSearchComponent
  ],

  providers : [],
  bootstrap : [ AppComponent ]
})
export class AppModule
{}
