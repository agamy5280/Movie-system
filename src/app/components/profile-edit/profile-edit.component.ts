import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrl: './profile-edit.component.scss'
})
export class ProfileEditComponent {
  myform= new FormGroup({
    FirstName: new FormControl("",[Validators.required,Validators.minLength(3)]),
    LastName: new FormControl("",[Validators.required,Validators.minLength(3)]),
    age: new FormControl(0,[Validators.min(20),Validators.max(30),Validators.required]),
    email: new FormControl("",[Validators.email])

  })
  add(){
    if(!this.myform.valid){
      alert("wrong data");
    }
    else{
      alert("valid data")
    }
  }

}
