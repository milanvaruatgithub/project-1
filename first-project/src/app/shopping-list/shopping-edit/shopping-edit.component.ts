import { Component, ElementRef, EventEmitter, Output, viewChild } from '@angular/core';
import { ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css'
})
export class ShoppingEditComponent {

@viewChild('nameinput') nameInputRef: ElementRef;
@viewChild('amountinput') amountInputRef: ElementRef;
@Output ingrediantadded = new EventEmitter<ingredient>();

onadditem()
{
  const igname = this.nameInputRef.nativeElement.value;
  const igamout = this.amountInputRef.nativeElement.value;
  const newingredient = new ingredient(igname,igamout);
  this.ingrediantadded.emit(newingredient);
}

}
