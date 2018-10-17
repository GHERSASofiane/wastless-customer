import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';


/*
  Generated class for the UserHomeServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserHomeServiceProvider {

  private _userHome = "https://wastless.herokuapp.com/userhome";

  constructor(public http: HttpClient) {
    console.log('Hello UserHomeServiceProvider Provider');
  }

 

  getMyProducts(userId)
  {
    // TODO : recuperer userId de token
    let params = new HttpParams().set('userId', userId);
    return this.http.get<any>(this._userHome,{ params: params })
  }

}
