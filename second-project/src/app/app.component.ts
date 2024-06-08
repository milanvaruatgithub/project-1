import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';
import { UserTaskComponent } from './user-task/user-task.component';
import { UserTaskListComponent } from './user-task/user-task-list/user-task-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    HeaderComponent,
    UserComponent,
    UserTaskComponent,
    UserTaskListComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'second-project'; 
  user = DUMMY_USERS;
  selecteduserid ?:string;

  get selecteduser()
  {
    return this.user.find((user) =>user.id === this.selecteduserid)!;
  }

  onselectuser(id:string)
  {
     this.selecteduserid = id;
    // console.log(this.selecteduser);
 }
}
