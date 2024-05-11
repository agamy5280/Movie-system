import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
  allMovies:any;
  constructor(private movieService:MovieService){
  }
  ngOnInit(){
    this.movieService.getAllMovies().subscribe({
      next:(data)=>{
        this.allMovies = data;
      },
      error:(err)=>{
        console.log(err);
      }
    });
  }
  
}
