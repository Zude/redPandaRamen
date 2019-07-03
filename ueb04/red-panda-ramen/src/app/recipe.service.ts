import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';

import {MessageService} from './message.service';
import {RECIPES} from './mock-recipes';
import {Recipe} from './recipe';

@Injectable({ providedIn : 'root' }) export class RecipeService
{

  getRecipes(): Observable<Recipe[]>
  {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('RecipeService: fetched recipes');
    return of(RECIPES);
  }

  constructor(private messageService: MessageService) {}
}
