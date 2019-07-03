import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {RecipeDetailComponent} from './recipe-detail/recipe-detail.component';
import {RecipesComponent} from './recipes/recipes.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations : [ AppComponent, RecipesComponent, RecipeDetailComponent, MessagesComponent, DashboardComponent ],
  imports : [ BrowserModule, FormsModule, AppRoutingModule ],
  providers : [],
  bootstrap : [ AppComponent ]
})
export class AppModule
{}
