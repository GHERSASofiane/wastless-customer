import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { SignUpPage } from '../sign-up/sign-up';
import { OfferSearchPage } from '../offer-search/offer-search'; 
import { Offer } from '../class/Offer';
import { GetProductsProvider } from '../../providers/get-products/get-products';
import { Reponse } from '../class/reponse';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  products: Offer[];
  constructor(public navCtrl: NavController, private _prod: GetProductsProvider){
  }

  ionViewCanEnter()
  {
    this.getAllProducts();
    return true;
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

  getAllProducts()
  {
    this._prod.getAllProducts().subscribe(
      res => 
        {
          let rep = new Reponse("",""); 
          rep = res;
          console.log(res);
          this.products = rep.reponse;
          console.log(JSON.stringify(this.products));
         
        },
        err => console.log(err)
    );
  }
 
}
