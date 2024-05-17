import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../../services/users.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  constructor(private userSerivce: UsersService, private _router: Router) {}

  registerForm = new FormGroup({
    firstName: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.pattern('[A-Za-z]+'),
    ]),
    lastName: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.pattern('[A-Za-z]+'),
    ]),
    phoneNumber: new FormControl('', [
      Validators.required,
      Validators.pattern(/^01/),
      Validators.minLength(10),
      Validators.maxLength(20),
      Validators.pattern('[0-9]+'),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  submitDetails() {
    //console.log(this.registerForm.value);
    //const postData = {...this.registerForm.value};
    //this.authService.registerUser(postData as User).subscribe(
    //response => console.log(response),
    // error => console.log(error)

    //)
    console.log(this.registerForm.value);
    const newUserData = this.userSerivce
      .registerUser({
        ...this.registerForm.value,
        'past-reservation': [],
      })
      .subscribe(() => {
        alert('Register Completed!');
        this._router.navigate(['/log-in']);
      });
  }
}
