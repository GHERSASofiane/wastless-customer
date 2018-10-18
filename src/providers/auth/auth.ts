
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';



/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {

  private _loginUrl = "https://wastless.herokuapp.com/authen";
  private _registerUrl = "https://wastless.herokuapp.com/signup";
  private token : string;

  constructor(private http: HttpClient, private _store: Storage){}

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

  
  

}
