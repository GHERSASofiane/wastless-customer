import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
 

@IonicPage()
@Component({
  selector: 'page-sign-out',
  templateUrl: 'sign-out.html',
})
export class SignOutPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignOutPage');
  }

}
