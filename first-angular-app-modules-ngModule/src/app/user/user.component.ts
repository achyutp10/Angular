// import { Component, computed, signal } from '@angular/core';
import { Component, computed, EventEmitter, Input, input, Output, output } from '@angular/core';
import { type User } from './user.model';
import { CardComponent } from "../shared/card/card.component";

// import { DUMMY_USERS } from '../dummy-users';

// const randonIndex = Math.floor(Math.random()*DUMMY_USERS.length)

// type User= {
//   id: string;
//   avatar: string;
//   name: string;
// }

// interface User {
//     id: string;
//     avatar: string;
//     name: string;
// }

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
// export class UserComponent {
//   // selectedUser = DUMMY_USERS[randonIndex];
//   // selectedUser = signal(DUMMY_USERS[randonIndex]);
//   imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar)

//   // get imagePath() {
//   //   return 'assets/users/' + this.selectedUser.avatar
//   // }
//   onSelectUser() {
//     // const randonIndex = Math.floor(Math.random()*DUMMY_USERS.length)
//     // this.selectedUser.set(DUMMY_USERS[randonIndex])
//     // this.selectedUser = DUMMY_USERS[randonIndex];
//   };
// };

export class UserComponent {

  // @Input({required:true}) id!: string;
  // @Input({required:true}) avatar!: string;
  // @Input({required:true}) name!: string;

  @Input({required:true}) user!: User;
  @Input({required:true}) selected!: boolean;



  @Output() select = new EventEmitter<string>();
  // select = output<string>();

//   avatar = input.required<string>();
//   name = input.required<string>();

//   imagePath = computed(() => {
//     'assets/users/' + this.avatar();
// });

  get imagePath() {
      return 'assets/users/' + this.user.avatar
  }


  onSelectUser() {
    this.select.emit(this.user.id);
  };
};
