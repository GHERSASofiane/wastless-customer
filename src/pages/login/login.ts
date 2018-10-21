import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';


import { User } from '../class/user';
import { Reponse } from '../class/reponse';
import { AuthProvider } from '../../providers/auth/auth';
import { HttpClient } from '@angular/common/http';

import { SignUpPage } from '../sign-up/sign-up';
import { MenuPage } from '../menu/menu';




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
  done = true;
  

  constructor(private _auth: AuthProvider, public http: HttpClient, public navCtrl: NavController) {
    this.user = new User("","");
    
  }


  logIn()
  {
   
    this.done = false;
      this._auth.login(this.user).subscribe
      (
        res => 
              {
                this.user = res.reponse;
                this._auth.setUser(this.user);
              
                localStorage.setItem('token', res.token);

              },
        err => 
        {
          this.done = true;
          console.log(err)
        },
        () => {
               
               this.done = true;
               this.navCtrl.setRoot(MenuPage);
              }
      
      ); 
  }

  register()
  {
    this.navCtrl.push(SignUpPage)
  }

}
