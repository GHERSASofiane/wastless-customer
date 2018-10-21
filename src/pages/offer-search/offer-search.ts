import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OfferConsultPage } from '../offer-consult/offer-consult';
 
import { User } from '../class/user'; 
import { GetProductsProvider } from '../../providers/get-products/get-products';
import { user } from '../test/user';
import { Offer } from '../class/Offer';


@IonicPage()
@Component({
  selector: 'page-offer-search',
  templateUrl: 'offer-search.html',
})
export class OfferSearchPage {

  // Variables
  userMe: User;
  public OffreAChercher: string;

  public offrs: Offer[];

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public getproductsProv: GetProductsProvider) {

    this.userMe = user;

  }

  ionViewDidLoad() {
    this.getoffresBypage('' , 0);
  }

  // ********* Function Fin

  public goToPageOfferConsult(id: number): void {
    // go to the MyPage component
    this.navCtrl.push(OfferConsultPage);
  }


  public openPage(page: string): void {
    alert("Ouvrir la page : " + page);
  }


  public getOffres(ev: any): void {

    this.OffreAChercher = ev.target.value;
    this.getoffresBypage(this.OffreAChercher  , 0 );
    
  }

  public getoffresBypage(cle: string , page: number): void{

    this.getproductsProv.GetProducts(cle, page).subscribe(
      res => { this.offrs = res.reponse },
      err => alert('Search error')
    );

  }

}
