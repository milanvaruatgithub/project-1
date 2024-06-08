import { Component,EventEmitter,Input , Output} from '@angular/core';
import { Recipe } from '../../../shopping-list/recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrl: './recipe-item.component.css'
})
export class RecipeItemComponent {

@Input() recipe:any;
@Output() recipeselected = new EventEmitter<void>();

onselected()
{
  this.recipeselected.emit(); 
}

}
