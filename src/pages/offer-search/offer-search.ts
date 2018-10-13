import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { WeatherPage } from '../weather/weather';

@IonicPage({
  name: 'PageSearch'
})
@Component({
  selector: 'page-offer-search',
  templateUrl: 'offer-search.html',
})
export class OfferSearchPage {

  OffresAChercher: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OfferSearchPage');
  }


  public getOffres(ev: any): void {
  
    this.OffresAChercher = ev.target.value;
    // TODO recherche dans serve
  }

}
