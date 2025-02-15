import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  imports: [FormsModule],
})
export class LoginComponent {
  onSubmit(formData: NgForm) {
    if (formData.form.invalid) {
      return;
    }
    const enteredEmail = formData.value.email
    const enteredPassword = formData.value.password
    console.log(formData.form);
    console.log(enteredEmail);
    console.log(enteredPassword);
  }
}
