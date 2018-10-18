import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { HomePage } from '../home/home';
import {JwtHelperService} from '@auth0/angular-jwt';
import { User } from '../class/user';
import { Storage } from '@ionic/storage';


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

   

  
  
  constructor(public navCtrl: NavController, private _store: Storage) {
    
  }

  popView(){
   
    this.navCtrl.pop();
  }

  ionViewWillLeave()
  {
    this._store.remove('token');
  }

}
