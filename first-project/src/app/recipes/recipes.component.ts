import { Component, Output } from '@angular/core';
import { Recipe } from '../shopping-list/recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css'
})
export class RecipesComponent {

 selectedrecipe: Recipe;

}
