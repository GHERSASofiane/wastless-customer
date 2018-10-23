import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
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
  public userMe: User;
  public OffreAChercher: string;
  public offrs: Offer[];
  public OffLenght = 0;
  public page: number = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public getproductsProv: GetProductsProvider, public alertCtrl: AlertController) {

    this.userMe = user;

  }

  ionViewDidLoad() {
    this.getoffresBypage('' , this.page);
  }

  // ********* Function Fin

  public goToPageOfferConsult(id: number): void {
    // go to the MyPage component
    this.navCtrl.push(OfferConsultPage);
  }


  public openPage(page: string): void { 
    this.navCtrl.setRoot(page);
  }


  public getOffres(ev: any): void {
    this.page = 0 ;
    this.OffreAChercher = ev.target.value;
    this.getoffresBypage(this.OffreAChercher  , this.page );
    
  }

  public getoffresBypage(cle: string , page: number): void{

    this.getproductsProv.GetProducts(cle, page).subscribe(
      res => {   
        if(res.status == "ok"){
          this.offrs = res.reponse;
          this.OffLenght = this.offrs.length;
        }else {
          this.showAlert("ERREUR",res.message);
        }
      },
      err => this.showAlert("ERREUR","Erreur sur le serveur :( :( ")
    );
    

  }

  public PreviousPage(): void{
    if(this.page !== 0){
      this.page = this.page - 1;
      this.getoffresBypage(this.OffreAChercher, this.page);
    }
    
  }

  public NextPage(): void{
    if(this.OffLenght !== 0){
      this.page = this.page + 1;
      this.getoffresBypage(this.OffreAChercher, this.page);
    }
    
  }

  //*********** Function pour alert */
  private showAlert(title: string, subTitle: string): void {
    const alert = this.alertCtrl.create({
      title: title,
      subTitle: subTitle,
      buttons: ['OK']
    });
    alert.present();
  }
}
