import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OfferConsultPage } from '../offer-consult/offer-consult';

import { TabOffs } from '../class/taboff';
/**
 * Generated class for the OfferSearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-offer-search',
  templateUrl: 'offer-search.html',
})
export class OfferSearchPage {

  public OffresAChercher;
  public offrs = TabOffs;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OfferSearchPage');
  }

  public getOffres(ev: any): void {
  
    this.OffresAChercher = ev.target.value;
    // TODO recherche dans serve
  }

  public goToPageOfferConsult(): void {
    // go to the MyPage component
    this.navCtrl.push(OfferConsultPage);
  }

}
