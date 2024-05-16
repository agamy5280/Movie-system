import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, BehaviorSubject } from 'rxjs';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  USERS:any 
  private userSubject :BehaviorSubject<User|null>;
  user:User|null = null;  
  private DB_U_url="http://localhost:3000/users";

  constructor(private http:HttpClient) { 

    if(localStorage.getItem('userData')){
      this.user = JSON.parse(localStorage.getItem('userData') as string);
    }
    this.userSubject = new BehaviorSubject<User|null>(this.user);


    this.getAllUsers().subscribe({
      next:(data)=>{this.USERS=data;
      },
      error:(err)=>{console.log("error");
      },
  
     }
   );
  }
  // return observe user
  getUserObservable(){
    return this.userSubject.asObservable();
  }

  // clear local storage 
  removeUserFromLocalStorage(){
    localStorage.clear();
    this.userSubject.next(null);
  }
  //set user 
  setUser(user1:User){
    localStorage.setItem('userData', JSON.stringify(user1));
    this.userSubject.next(user1);
  }

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
 logIn(email:any,pass:any){
  console.log(this.USERS);
  for( let i = 0; i < this.USERS.length; i++){
    const user = this.USERS[i];
    if (user.email==email){
      if(user.password==pass){
        return user
  
      }else{
        
        return 2
      }
  
    }else  if (i === this.USERS.length - 1) {
      return 1
    }
  }
}
  
}