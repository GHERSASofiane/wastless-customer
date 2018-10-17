import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { HomePage } from '../home/home';
import {JwtHelperService} from '@auth0/angular-jwt';
import { User } from '../class/user';


/**
 * Generated class for the WeatherPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-weather',
  templateUrl: 'weather.html',
})
export class WeatherPage {

   

  
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private _auth: AuthProvider) {
    
  }

  ionViewCanEnter()
  {
    if (this._auth.loggedIn())
    {
      const helper = new JwtHelperService();
    let t = helper.decodeToken(localStorage.getItem('token'));
    let user: User = t;
    console.log(user.userMail)
      return true;
    }
    else
    {
      this.navCtrl.push(HomePage);
      return false;
    }
  }

}
