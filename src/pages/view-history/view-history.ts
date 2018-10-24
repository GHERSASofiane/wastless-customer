import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../class/user';
 

@IonicPage()
@Component({
  selector: 'page-view-history',
  templateUrl: 'view-history.html',
})
export class ViewHistoryPage {

  // Variables
  public userMe: User;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.userMe = navParams.get('user');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewHistoryPage');
  }

}
