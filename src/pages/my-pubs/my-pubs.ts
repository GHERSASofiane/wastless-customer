import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { DeleteProductProvider } from '../../providers/delete-product/delete-product';
import { Offer } from '../class/Offer';
import { User } from '../class/user';
import { MyPubsProvider } from '../../providers/my-pubs/my-pubs';
import { EditOfferPage } from '../edit-offer/edit-offer';
 

@IonicPage()
@Component({
  selector: 'page-my-pubs',
  templateUrl: 'my-pubs.html',
})
export class MyPubsPage {

  public offrs: Offer[];
  private userMe: User;
  public OffLenght = 0;
  
  constructor(public navCtrl: NavController, public navParams: NavParams
          , private DeletProv: DeleteProductProvider, private MyPubProv: MyPubsProvider,
          public alertCtrl: AlertController) {

            this.userMe = navParams.get('user');
            this.GetProduct();
  }

  ionViewDidLoad() { }

  public GetProduct(){

    this.MyPubProv.MyPubs(this.userMe.userId).subscribe(
      res => {   
        if(res.status == "ok"){
          this.offrs = res.reponse; 
          this.OffLenght = this.offrs.length; 
        }else {
          this.showAlert("ERREUR",res.message);
        }
      },
      err => this.showAlert("ERREUR","Erreur sur le serveur :( :( ")
    )
  }

  public Delete(id: number){
    
    this.DeletProv.DeleteProduct(id).subscribe(
      res => {   
        if(res.status == "ok"){
          this.showAlert("SUCCESS",res.message);
        }else {
          this.showAlert("ERREUR",res.message);
        }
      },
      err => this.showAlert("ERREUR","Erreur sur le serveur :( :( ")
    )
  }

  public Edit(offre: Offer){
    
    this.navCtrl.push(EditOfferPage,{offre: offre});
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
