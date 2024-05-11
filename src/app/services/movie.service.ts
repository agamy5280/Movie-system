import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private readonly DB_LINK:string;
  constructor(private http:HttpClient) { 
    this.DB_LINK = "http://localhost:3000/movies";
  }
  
  getAllMovies(){
    return this.http.get(this.DB_LINK);
  }
  
}
