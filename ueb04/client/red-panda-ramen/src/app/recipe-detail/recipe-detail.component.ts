import {Location} from '@angular/common';
import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Recipe} from '../recipe';
import {RecipeService} from '../recipe.service';

@Component({
  selector : 'app-recipe-detail',
  templateUrl : './recipe-detail.component.html',
  styleUrls : [ './recipe-detail.component.css' ]
})
export class RecipeDetailComponent implements OnInit
{
  @Input() recipe: Recipe;

  constructor(private route: ActivatedRoute,
              private recipeService: RecipeService,
              private location: Location)
  {}

  ngOnInit() { this.getRecipe(); }

  getRecipe(): void
  {
    const name = this.route.snapshot.paramMap.get('rezeptName');
    this.recipeService.getRecipe(name).subscribe(recipe => this.recipe =
                                                   recipe);
  }

  goBack(): void { this.location.back(); }

  save(): void
  {
    this.recipeService.updateRecipe(this.recipe).subscribe(() => this.goBack());
  }
}
