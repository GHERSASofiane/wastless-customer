import { HttpClient } from '@angular/common/http';
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
    
  }

 

  getMyProducts()
  {
    
    return this.http.get<any>(this._userHome)
  }

}
