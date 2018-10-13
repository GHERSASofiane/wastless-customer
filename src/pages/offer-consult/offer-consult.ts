import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
 

@IonicPage({
  name: 'PageOfferConsult'
})
@Component({
  selector: 'page-offer-consult',
  templateUrl: 'offer-consult.html',
})
export class OfferConsultPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OfferConsultPage');
  }

}
