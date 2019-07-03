import {Component, OnInit} from '@angular/core';

import {RECIPES} from '../mock-recipes';
import {Recipe} from '../recipe';

@Component({
  selector : 'app-recipes',
  templateUrl : './recipes.component.html',
  styleUrls : [ './recipes.component.css' ]
})
export class RecipesComponent implements OnInit
{
  recipes = RECIPES;
  onSelect(recipe: Recipe): void { this.selectedRecipe = recipe; }

  constructor() {}

  ngOnInit() {}
}
