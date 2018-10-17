
import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
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

  getUserDetails()
  {
    const helper = new JwtHelperService();
    let t = helper.decodeToken(localStorage.getItem('token'));
    let user: User = t;
    console.log(user);
    return user;
  }

}
