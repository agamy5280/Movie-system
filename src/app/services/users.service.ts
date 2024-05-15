import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  USERS:any 

  constructor(private http:HttpClient) { 
    this.getAllUsers().subscribe({
      next:(data)=>{this.USERS=data;
      },
      error:(err)=>{console.log("error");
      },
  
     }
   );
  }
  private DB_U_url="http://localhost:3000/users"
  login=false;
  getAllUsers(){
    return this.http.get(this.DB_U_url)
  }
  getUsersByid(id:number){
    return this.http.get(this.DB_U_url+"/"+id)
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
 logIn(email:any,pass:any){
   
 for( const user of this.USERS){
  if (user.email==email){
    if(user.password==pass){
      return user

    }else{
      return 1
    }

  }else{
    return 2
  }

 }

  }

}