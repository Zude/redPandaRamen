import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {RecipeDetailComponent} from './recipe-detail/recipe-detail.component';
import {RecipesComponent} from './recipes/recipes.component';
import { MessagesComponent } from './messages/messages.component';

@NgModule({
  declarations : [ AppComponent, RecipesComponent, RecipeDetailComponent, MessagesComponent ],
  imports : [ BrowserModule, FormsModule, AppRoutingModule ],
  providers : [],
  bootstrap : [ AppComponent ]
})
export class AppModule
{}
