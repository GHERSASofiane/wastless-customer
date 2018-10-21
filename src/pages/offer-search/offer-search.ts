import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OfferConsultPage } from '../offer-consult/offer-consult';

import { TabOffs } from '../class/taboff';
import { User } from '../class/user';
import { user } from '../test.1/user';
 

@IonicPage()
@Component({
  selector: 'page-offer-search',
  templateUrl: 'offer-search.html',
})
export class OfferSearchPage {

  // Variables
  userMe:  User;
  
  public OffresAChercher;
  public offrs = TabOffs;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.userMe = user;
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


  // ********* Function Fin
openPage(page: string): void {
  alert("Ouvrir la page : "+page);
  }


}
