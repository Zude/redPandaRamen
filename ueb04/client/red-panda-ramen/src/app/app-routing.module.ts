import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {RecipeDetailComponent} from './recipe-detail/recipe-detail.component';
import {RecipesComponent} from './recipes/recipes.component';

const routes: Routes = [
  { path : '', redirectTo : '/dashboard', pathMatch : 'full' },
  { path : 'detail/:rezeptName', component : RecipeDetailComponent },
  { path : 'dashboard', component : DashboardComponent },
  { path : 'recipes', component : RecipesComponent }
];

@NgModule(
  { imports : [ RouterModule.forRoot(routes) ], exports : [ RouterModule ] })
export class AppRoutingModule
{}