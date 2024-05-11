import { Component, OnInit } from '@angular/core';
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
export class LoginPageComponent implements OnInit {
  USERS:any
  constructor(private server :UsersService, private router: Router){

  }
  ngOnInit(){
    this.server.getAllUsers().subscribe({
       next:(data)=>{this.USERS=data;
       },
       error:(err)=>{console.log("error");
       },

      }
    );
     

  }
    myForm = new FormGroup({
    email: new FormControl("",[Validators.required,Validators.email]),
    pass: new FormControl(null,[Validators.min(20), Validators.max(30)])
  })

  Add(){
    const emaill =this.myForm.value.email
    const pass =this.myForm.value.pass

    for( const user of this.USERS){
    
      if (user.email==emaill &&  user.password == pass ){
    
         console.log(user.email,user.password);
         this.server.login=true
         
         this.router.navigate(['/']);       
      }
      
      
    }



   
  }
  get emailValid(){
    return this.myForm.controls["email"].valid;
  }
  get PassValid(){
    return this.myForm.controls["pass"].valid;
  }
}
