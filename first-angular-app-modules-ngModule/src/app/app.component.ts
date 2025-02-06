import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DUMMY_USERS } from './dummy-users';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  // imports: [HeaderComponent, UserComponent, TasksComponent, CardComponent, NgFor, NgIf],
  standalone: false,
  // imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first-angular-app';
  users = DUMMY_USERS;
  selectedUserId?: string;

  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedUserId);
  }

  onSelectUser(id:string) {
    this.selectedUserId = id
  }
}
