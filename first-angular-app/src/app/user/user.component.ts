// import { Component, computed, signal } from '@angular/core';
import { Component, computed, EventEmitter, Input, input, Output } from '@angular/core';

// import { DUMMY_USERS } from '../dummy-users';

// const randonIndex = Math.floor(Math.random()*DUMMY_USERS.length)

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
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

  @Input({required:true}) id!: string;
  @Input({required:true}) avatar!: string;
  @Input({required:true}) name!: string;
  @Output() select = new EventEmitter();

//   avatar = input.required<string>();
//   name = input.required<string>();

//   imagePath = computed(() => {
//     'assets/users/' + this.avatar();
// });

  get imagePath() {
      return 'assets/users/' + this.avatar
  }


  onSelectUser() {
    this.select.emit(this.id);
  };
};
