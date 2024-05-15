import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UsersService } from '../../services/users.service';
import { of } from 'rxjs';
import { Router, RouterModule } from '@angular/router';



@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  providers:[UsersService],
  styleUrl: './login-page.component.scss'
  
})
export class LoginPageComponent  {
  
  constructor(private server :UsersService, private router: Router){

  }

    Log_in_Form = new FormGroup({
    email: new FormControl("",[Validators.required,Validators.email]),
    pass: new FormControl(null,[Validators.required,Validators.minLength(8)])
  })

  logIn(){
    
    const ret=this.server.logIn(this.Log_in_Form.value.email,this.Log_in_Form.value.pass)
    if (ret==1){
      alert("inviled email")

    }else if(ret==2){
      alert("inviled password")

    }else{
         console.log(ret.email,ret.password);
         this.server.login=true;
         var localuser= ret
         if (localuser.hasOwnProperty('password')) {
          delete localuser['password'];
        }
          
         localStorage.setItem('userData', JSON.stringify(localuser));
         alert("Login Successful!")
         this.router.navigate(['/']);       



    }


    
      
      // Search for key in object -> if key = password -> splice


    // 1- this.userService.login(this.Log_in_Form.value)
    // 2- Serivce -> login -> email, password 
    //   2.1 - Check for email + password return if email and password is correct (return userData)
    //   2.2 - if email or password invalid return MSG "invalid credi"
    //   2.3 - if any other error return error
   
  }







  
  get emailValid(){
    return this.Log_in_Form.controls["email"].valid;
  }
  get PassValid(){
    return this.Log_in_Form.controls["pass"].valid;

  }


  @Input() label: string = ''; // Label for the password field (optional)
  @Output() passwordChange = new EventEmitter<string>();

  showPassword = false;

  toggleShowPassword() {
    this.showPassword = !this.showPassword;


    
}
}