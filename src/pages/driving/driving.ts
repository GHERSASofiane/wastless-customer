import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
 

@IonicPage()
@Component({
  selector: 'page-driving',
  templateUrl: 'driving.html',
})
export class DrivingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DrivingPage');
  }

}
