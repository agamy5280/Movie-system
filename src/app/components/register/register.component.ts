import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../../services/users.service';
import { User } from '../../../interfaces/auth';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'

})
export class RegisterComponent {
  constructor(private authService : UsersService) { }

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
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  submitDetails(){
    //console.log(this.registerForm.value);
    const postData = {...this.registerForm.value};
    this.authService.registerUser(postData as User).subscribe(
      response => console.log(response),
      error => console.log(error)
      
      
    )
  }
   
}
