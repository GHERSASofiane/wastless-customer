import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../class/user';

/**
 * Generated class for the UserHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-home',
  templateUrl: 'user-home.html',
})
export class UserHomePage {

  user : User;
  

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.user = navParams.get('user');
    alert(this.user.userName);
   
  }

  


  updateProfile(){
   
  }

  logout()
  {
  //  this.navCtrl.push(HomePage);
  }

  achats()
  {
    alert("achats");
  }

  acheter()
  {
    alert("acheter");
  }

  offres()
  {
    alert("offres");
  }
 

}
