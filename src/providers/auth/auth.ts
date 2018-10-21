
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../pages/class/user';




/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {

  private _loginUrl = "https://wastless.herokuapp.com/authen";
  private _registerUrl = "https://wastless.herokuapp.com/signup";
  private _user = new User("", "");

  constructor(private http: HttpClient){}

  register(user)
  {
    return this.http.post<any>(this._registerUrl,user)
  }

  login(user)
  {
    return this.http.post<any>(this._loginUrl, user)
  }

  loggedIn()
  {
    return !!localStorage.getItem('token');
  
  }

  getToken()
  {
    return localStorage.getItem('token');
      
  }

  setUser(user: User)
  {
    this._user = user;
  }

  getUser()
  {
    return this._user;
  }
  

}
