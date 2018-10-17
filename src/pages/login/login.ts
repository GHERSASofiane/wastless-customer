import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


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
  

  constructor(private _auth: AuthProvider, public http: HttpClient, public navCtrl: NavController, private navParams: NavParams) {
    this.user = new User("","");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  

  logIn()
  {

    this._auth.login(this.user).subscribe
      (
        res => 
              {
                console.log(res);
                localStorage.setItem('token', res.token);
                this.navCtrl.push(UserHomePage);
              //  this.navCtrl.setRoot(WeatherPage);
              },
        err => console.log(err)
      );
    /** 
    this.http.post(this.url, JSON.stringify(this.user))
             .subscribe(
                         res =>
                          {
                              this.reponse = res.json();
                                  if(this.reponse.status == "ok")
                                  {
                                    
                                    this.user = this.reponse.reponse;
                                    this.navCtrl.setRoot(UserHomePage, {user : this.user});
                                  //  this.navCtrl.push(UserHomePage, {user : this.user});
                                  }
                                 else
                                  alert(this.reponse.message);
                          },
                          error => {console.log(error)}
                         );
       */  
  
    
  }

}
