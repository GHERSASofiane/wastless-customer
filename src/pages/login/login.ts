import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';


import { User } from '../class/user';
import { Reponse } from '../class/reponse';
import { AuthProvider } from '../../providers/auth/auth';
import { HttpClient } from '@angular/common/http';

import { UserHomePage } from '../user-home/user-home';



/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user :  User;
  reponse : Reponse;
  

  constructor(private _auth: AuthProvider, public http: HttpClient, public navCtrl: NavController) {
    this.user = new User("","");
    
  }


  logIn()
  {
   
    this._auth.login(this.user).subscribe
      (
        res => 
              {
                localStorage.setItem('token', res.token); 
                this.navCtrl.push(UserHomePage);
              
              },
        err => console.log(err)
      
      );
    
    
  }

}
