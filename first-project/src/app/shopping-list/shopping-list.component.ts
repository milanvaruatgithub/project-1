import { Component } from '@angular/core';
import { ingredient } from './shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent {
ingredient: ingredient[] =[
  new ingredient('Apples',5),
  new ingredient('Tomatoes',10)

];
}
