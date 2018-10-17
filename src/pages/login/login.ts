import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


import { User } from '../class/user';
import { Reponse } from '../class/reponse';
import { AuthProvider } from '../../providers/auth/auth';
import { HttpClient } from '@angular/common/http';

import { UserHomePage } from '../user-home/user-home';
import { Storage } from '@ionic/storage';

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
  

  constructor(private _auth: AuthProvider, public http: HttpClient, public navCtrl: NavController, private navParams: NavParams, private _store:Storage) {
    this.user = new User("","");
    _store.set('token','');
  }


  logIn()
  {


    this._auth.login(this.user).subscribe
      (
        res => 
              {
                console.log(res);
                this._store.set('token', res.token);
                this.navCtrl.push(UserHomePage);
              //  this.navCtrl.setRoot(WeatherPage);
              },
        err => console.log(err)
      );
    
  
    
  }

}
