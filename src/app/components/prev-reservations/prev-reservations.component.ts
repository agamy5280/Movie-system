import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-prev-reservations',
  templateUrl: './prev-reservations.component.html',
  styleUrl: './prev-reservations.component.scss'
})
export class PrevReservationsComponent implements OnInit{
  allReservations:any;
  user = JSON.parse(localStorage.getItem('userData')!);
  constructor(private userService:UsersService){
  }
  ngOnInit(): void {
    
    this.userService.getUsersByid(this.user.id).subscribe({
      next:(data:any)=>{
        this.allReservations = data["past-reservation"];
      }
    })
  }

}
