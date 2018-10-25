import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { OffreDetails } from '../class/OffreDetails';
import { ChatProvider } from '../../providers/chat/chat';
import { Chat } from '../class/Chat';
import { User } from '../class/user';
 

@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {

    // Variables
    public userMe: User;
  public product: OffreDetails;
  public Messages: Chat[];
  public Message: Chat;

  constructor(public navCtrl: NavController, public navParams: NavParams,
               private ChatProvd: ChatProvider, public alertCtrl: AlertController) {

    this.product = navParams.get('product');
    this.userMe = navParams.get('user');
console.log(this.userMe);
    // this.Message.ChatSend = this.userMe.userId;
    // this.Message.ChatReceive = this.product.UserId;
    // this.Message.ProductName = this.product.ProductName;
    // this.Message.ProductDescription = this.product.ProductDescription;
    // this.Message.ProductPicture = this.product.ProductPicture;
    // this.Message.ProductPrice = this.product.ProductPrice;
    // this.Message.ChatProduct = this.product.ProductId;
    // this.Message.ChatMessage = '';

    this.GetMessages(this.product.ProductId);
  }

  ionViewDidLoad() {  }


  public Confirme(){

    this.ChatProvd.Confirme(this.Message).subscribe(
      res => {
        if (res.status == "ok") {
          this.showAlert("SUCCESS", res.message);
        } else {
          this.showAlert("ERREUR", res.message);
        }
      },
      err => this.showAlert("ERREUR", "Erreur sur le serveur :( :( ")
    )
  }

  public AddMessage(){

    this.ChatProvd.AddMessage(this.Message).subscribe(
      res => {
        if (res.status == "ok") {
          this.showAlert("SUCCESS", res.message);
        } else {
          this.showAlert("ERREUR", res.message);
        }
      },
      err => this.showAlert("ERREUR", "Erreur sur le serveur :( :( ")
    )
  }

  private GetMessages(id: number){

    this.ChatProvd.GetMessages(id).subscribe(
      res => {
        if (res.status == "ok") {
          this.Messages = res.reponse;
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
