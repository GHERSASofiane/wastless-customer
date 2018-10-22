import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Offer } from '../class/Offer';

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
