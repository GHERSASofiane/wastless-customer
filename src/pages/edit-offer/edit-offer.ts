import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Offer } from '../class/Offer';
import { EditProductProvider } from '../../providers/edit-product/edit-product'; 
import { User } from '../class/user';
import { MyPubsPage } from '../my-pubs/my-pubs';


@IonicPage()
@Component({
  selector: 'page-edit-offer',
  templateUrl: 'edit-offer.html',
})
export class EditOfferPage {

  // Variables
  public userMe: User;
  private offre: Offer = new Offer();

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public alertCtrl: AlertController, private EditProvider: EditProductProvider) {

    this.offre = this.navParams.get('offre');
    this.userMe = navParams.get('user');

  }

  ionViewDidLoad() { }


  public onFileSelected(ev: any): void {
    // TODO
    // this.product.ProductPicture = ev.target.value;
    // console.log(ev);
  }


  public EditProduct() {

    this.offre.ProductDescription = this.offre.ProductDescription.toLowerCase();
    this.offre.ProductName = this.offre.ProductName.toLowerCase();

    this.EditProvider.EditProduct(this.offre).subscribe(
      res => {
        if (res.status == "ok") {
          this.showAlert("SUCCESS", res.message);
          this.navCtrl.push(MyPubsPage, { user: this.userMe });
        } else {
          this.showAlert("ERREUR", res.message);
        }
      },
      err => this.showAlert("ERREUR", "Erreur sur le serveur :( :( ")
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
