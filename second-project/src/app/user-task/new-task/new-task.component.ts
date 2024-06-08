import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
@Output() cancel = new EventEmitter<void>();
@Output() add= new EventEmitter<{title:string; summary:string; date:string;}>();
enteredtitle = '';
enteredsummary='';
enteredduedate='';

oncancel()
{
  this.cancel.emit()
}
onsubmit()
{
  this.add.emit(
    {
      title: this.enteredtitle,
      summary: this.enteredsummary,
      date: this.enteredduedate,
    }
  )
}

}

