import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {RecipesComponent} from './recipes/recipes.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';

@NgModule({
  declarations : [ AppComponent, RecipesComponent, RecipeDetailComponent ],
  imports : [ BrowserModule, FormsModule, AppRoutingModule ],
  providers : [],
  bootstrap : [ AppComponent ]
})
export class AppModule
{}
