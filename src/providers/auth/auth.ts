
import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { User } from '../../pages/class/user';
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
    return !!this._store.get('token');
  }

  getToken()
  {
    return this._store.get('token');
  }

  getUserDetails()
  {
    const helper = new JwtHelperService();
    let token : any = this._store.get('token');
    let t = helper.decodeToken(token);
    let user: User = t;
    console.log(user);
    return user;
  }

}
