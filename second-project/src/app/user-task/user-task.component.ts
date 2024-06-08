import { Component, Input } from '@angular/core';
import { UserTaskListComponent } from './user-task-list/user-task-list.component';
import { NewTaskComponent } from './new-task/new-task.component';

@Component({
  selector: 'app-user-task',
  standalone: true,
  imports: [UserTaskListComponent,NewTaskComponent],
  templateUrl: './user-task.component.html',
  styleUrl: './user-task.component.css'
})
export class UserTaskComponent {
@Input ({required:true}) userid!:string;
@Input({required :true}) name!:string;
isaddingtask =false;

tasks = [
  {
    id:'t1',
    userid:'u1',
    title:'Master Angular',
    summary:'Learn About All Basic and Advances',
    duedate:'2024-07-20'
  },
  {
    id:'t1',
    userid:'u2',
    title:'Master Angular',
    summary:'Learn About All Basic and Advances',
    duedate:'2024-07-20'
  },
  {
    id:'t1',
    userid:'u1',
    title:'Master Angular',
    summary:'Learn About All Basic and Advances',
    duedate:'2024-07-20'
  }

];

get selectedusertasks()
{
  return this.tasks.filter((task) => task.userid === this.userid  );
}
oncompletetask(id:string)
{
  this.tasks = this.tasks.filter((task) =>task.id !==id);
}

onstartaddtask()
{
  this.isaddingtask=true;
}

oncanceladdtask()
{
  this.isaddingtask=false;
}

onaddtask(taskdata :{title:string; summary:string; date:string;} )
{
  this.tasks.push({
    id: new Date().getTime().toString(),
    userid:this.userid,
    title: taskdata.title,
    summary: taskdata.summary,
    duedate: taskdata.date,

  })
  this.isaddingtask=false;
}

}
