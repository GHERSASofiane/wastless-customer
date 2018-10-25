import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Offer } from '../class/Offer';
import { User } from '../class/user';
import { AddProductProvider } from '../../providers/add-product/add-product';
import { OfferSearchPage } from '../offer-search/offer-search';

@IonicPage()
@Component({
  selector: 'page-add-offer',
  templateUrl: 'add-offer.html',
})
export class AddOfferPage {

  public userMe: User;
  product = new Offer();
  private selectedFile : File = null;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private addProdProvid: AddProductProvider,
     public alertCtrl: AlertController) {

    this.userMe = this.navParams.get('user');

    this.product.ProductPicture = '' ;
    this.product.ProductDate = "";
    this.product.ProductName ="";
    this.product.ProductDescription ="";
    this.product.ProductPrice = 0;
    this.product.UserId = this.userMe.userId;
  }
 
  onFileSelected(event)
  {
    
    this.selectedFile = <File> event.target.files[0];
    var reader = new FileReader();
    reader.onload =this._handleReaderLoaded.bind(this);
    reader.readAsBinaryString(this.selectedFile);
  }

  _handleReaderLoaded(readerEvt) {
    var binaryString = readerEvt.target.result;
    this.product.ProductPicture = btoa(binaryString);
   }
  
  public addProduct(){ 

    this.product.ProductDescription = this.product.ProductDescription.toLowerCase();
    this.product.ProductName = this.product.ProductName.toLowerCase(); 

    this.addProdProvid.AddProduct(this.product).subscribe(
      res => {   
        if(res.status == "ok"){ 
          this.showAlert("SUCCESS",res.message);
          this.navCtrl.setRoot(OfferSearchPage);
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
