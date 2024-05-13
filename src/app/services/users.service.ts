import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../../interfaces/auth';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }
  private DB_U_url="http://localhost:3000/users"
  login=false;
  getAllUsers(){
    return this.http.get(this.DB_U_url)
  }
  getUsersByid(id:number){
    return this.http.get(this.DB_U_url+"/"+id)
  }
  registerUser(userDetails: User){
    return this.http.post(`${this.DB_U_url}/users`,userDetails);
  }
}