import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the UpdateProfileServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UpdateProfileServiceProvider {

  private _url = "https://wastless.herokuapp.com/editprofile";

  constructor(public http: HttpClient) {
    console.log('Hello UpdateProfileServiceProvider Provider');
  }


  updateProfile(user)
  {
    return this.http.post<any>(this._url,user)
  }

}
