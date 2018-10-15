import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserHomePage } from '../user-home/user-home';
import { Http } from '@angular/http';
import { User } from '../class/user';
import { Reponse } from '../class/reponse';

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
  private url = "https://blowless.herokuapp.com/authen";

  constructor(public http: Http, public navCtrl: NavController, private navParams: NavParams) {
    this.user = new User("","");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  logIn()
  {
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
         
  
    
  }

}
