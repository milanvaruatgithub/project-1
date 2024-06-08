import { Component, EventEmitter, Input, Output, input } from '@angular/core';
import { CardComponent } from '../../shared/card/card.component';
import { DatePipe } from '@angular/common';

interface task
{
  id:string;
  userid:string;
  duedate:string;
  summary:string;
  title:string;
}

@Component({
  selector: 'app-user-task-list',
  standalone: true,
  imports: [CardComponent,DatePipe],
  templateUrl: './user-task-list.component.html',
  styleUrl: './user-task-list.component.css'
})
export class UserTaskListComponent {

@Input({required: true}) task!:task;
@Output() complete = new EventEmitter<string>();

oncompletetask()
{
  this.complete.emit(this.task.id);
}

}
