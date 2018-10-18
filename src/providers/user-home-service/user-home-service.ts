import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';


/*
  Generated class for the UserHomeServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserHomeServiceProvider {

  private _userHome = "https://wastless.herokuapp.com/userhome";

  constructor(public http: HttpClient, private _store:Storage) {
    
  }

 

  getMyProducts()
  {
    
    return this.http.get<any>(this._userHome)
  }

}
