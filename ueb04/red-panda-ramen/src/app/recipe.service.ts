import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';

import {MessageService} from './message.service';
import {RECIPES} from './mock-recipes';
import {Recipe} from './recipe';

@Injectable({ providedIn : 'root' }) export class RecipeService
{
  constructor(private messageService: MessageService) {}

  getRecipes(): Observable<Recipe[]>
  {
    // TODO: send the message _after_ fetching the recipes
    this.messageService.add('RecipeService: fetched recipes');
    return of(RECIPES);
  }

  getRecipe(id: number): Observable<Recipe>
  {
    // TODO: send the message _after_ fetching the recipe
    this.messageService.add(`HeroService: fetched recipe id=${id}`);
    return of(RECIPES.find(recipe => recipe.id === id));
  }
}
