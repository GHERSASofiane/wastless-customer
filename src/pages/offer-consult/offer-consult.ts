import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { GetProductDetProvider } from '../../providers/get-product-det/get-product-det';
import { OffreDetails } from '../class/OffreDetails';
 

@IonicPage()
@Component({
  selector: 'page-offer-consult',
  templateUrl: 'offer-consult.html',
})
export class OfferConsultPage {

  private id;
  public infos: OffreDetails;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private prodDetProv: GetProductDetProvider, public alertCtrl: AlertController) {
    this.id = navParams.get('id');
    this.GetDetails();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OfferConsultPage');
  }

  private GetDetails(): void{
    this.prodDetProv.GetProductDetails(this.id).subscribe(
      res => {   
        if(res.status == "ok"){
          this.infos = res.reponse; 
          console.log(this.infos)
        }else {
          this.showAlert("ERREUR",res.message);
        }
      },
      err => this.showAlert("ERREUR","Erreur sur le serveur :( :( ")
    )
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
