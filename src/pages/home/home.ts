import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { SignUpPage } from '../sign-up/sign-up';
import { OfferSearchPage } from '../offer-search/offer-search';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  constructor(public navCtrl: NavController){
  }


  login()
  {
    this.navCtrl.push(LoginPage);
  }
  
  register()
  {
    this.navCtrl.push(SignUpPage);
  }

 
  search()
  {
    this.navCtrl.setRoot(OfferSearchPage);
  }

}
