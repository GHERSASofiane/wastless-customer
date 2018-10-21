import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Offer } from '../class/Offer';

/**
 * Generated class for the AddOfferPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-offer',
  templateUrl: 'add-offer.html',
})
export class AddOfferPage {

  product = new Offer();
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  
  addProduct()
  {
    alert("produit ajouter");
  }

  

}
