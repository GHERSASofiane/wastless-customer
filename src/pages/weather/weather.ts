import { Component } from '@angular/core';
import { IonicPage, NavController} from 'ionic-angular';



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

  constructor(public navCtrl: NavController) {
    
  }

}
