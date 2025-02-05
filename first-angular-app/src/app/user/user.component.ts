// import { Component, computed, signal } from '@angular/core';
import { Component, computed, Input, input } from '@angular/core';

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

  // @Input({required:true}) avatar!: string;
  // @Input({required:true}) name!: string;

  avatar = input.required<string>();
  name = input.required<string>();

  imagePath = computed(() => {
    'assets/users/' + this.avatar();
});

  // get imagePath() {
  //     return 'assets/users/' + this.avatar
  // }


  onSelectUser() {

  };
};
