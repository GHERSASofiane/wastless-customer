import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AddOfferPage } from '../add-offer/add-offer';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
this.navCtrl.push(AddOfferPage);
  }



}
