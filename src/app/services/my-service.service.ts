import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  constructor(private readonly http:HttpClient) { }
  private readonly DB_URL = "http://localhost:3000/movies";

  getShowTimes(id:number){
    return this.http.get(this.DB_URL + "/" + id)
  }
}
