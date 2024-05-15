import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../../model/User';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements  OnInit{
  
  constructor( private router: Router , private userService:UsersService){
  }
  currentUser:User|null = null;
  ngOnInit(): void {
    this.userService.getUserObservable().subscribe((user)=>{
      this.currentUser = user;
    });
  }
  //navigate to login page
  login(){
    this.router.navigate(['/log-in']);
  }
  // logout and navigate to login page
  logout(): void {
    this.userService.removeUserFromLocalStorage();
    this.router.navigate(['/log-in']);
  }
  
}
