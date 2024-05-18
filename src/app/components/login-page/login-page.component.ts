import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { UsersService } from '../../services/users.service';
import { of } from 'rxjs';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  providers: [UsersService],
  styleUrl: './login-page.component.scss',
})
export class LoginPageComponent {

  showPassword = false;
  constructor(private server: UsersService, private router: Router) {}

  Log_in_Form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    pass: new FormControl(null, [Validators.required, Validators.minLength(8)]),
  });

  logIn() {
    const ret = this.server.logIn(
      this.Log_in_Form.value.email,
      this.Log_in_Form.value.pass
    );
    console.log(ret);

    if (ret == 2) {
      alert('invaild email');
    } else if (ret == 1) {
      alert('invaild password');
    } else {
      var localuser = ret;
      if (localuser.hasOwnProperty('password')) {
        delete localuser['password'];
      }

      this.server.setUser(localuser);
      alert('Login Successful!');
      this.router.navigate(['/']).then(() => {
        window.location.reload();
      });
    }
  }

  get emailValid() {
    return this.Log_in_Form.controls['email'].valid;
  }
  get PassValid() {
    return this.Log_in_Form.controls['pass'].valid;
  }
  
}
