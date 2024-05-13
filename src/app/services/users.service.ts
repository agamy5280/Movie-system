import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../../interfaces/auth';
import { Observable, map } from 'rxjs';

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

  
  // return whole user object based on ID
  async getUser(id:any){
    return this.http.get(this.DB_U_url).pipe(
      map((data:any)=>{
        return data.find((user:{id:any}) => user.id === id);
      })
    )
  }

  // send updated user to json file
  updateObjectById(id: number, updatedObject: any): Observable<any> {
    return this.http.put<any>(`${this.DB_U_url}/${id}`, updatedObject);
  }





}